import axios from "axios";
import { getToken } from "./util";

// Axios 인스턴스 설정
const instance = axios.create({
  // 백엔드 배포 주소
  baseURL: "https://kkuljohap.shop"
});

//interceptor를 통한 header 설정
instance.interceptors.request.use(async (config) => {
  config.headers["content-type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";

  //getToken는 로컬 스토리지에 토큰이 있다면 반환한다 없다면 null 값 반환
  config.headers["Authorization"] = await getToken();

  return config;
});

export const userApi = {
  // 회원 가입
  signup: (user) => instance.post("/api/v1/users/signup", user),

  // 이메일 중복 확인
  checkemail: (user) => instance.post("/api/v1/users/checkemail", user),

  // 닉네임 중복 확인
  checknick: (user) => instance.post("/api/v1/users/checknick", user),

  // 로그인
  login: (user) => instance.post("/api/v1/users/login", user),

  // 로그인 유지
  loginCheck: (user) => instance.get("/api/v1/users/logincheck", user),

  // 로그아웃
  logout: (user) => instance.get("/api/v1/users/logout", user),

  // 내 프로필
  me: (user) => instance.get("/api/v1/users/me", user),

  // 프로필 수정
  userid: (user) => instance.patch("/api/v1/users/userid", user)
};

export const eventPostApi = {
  //이벤트 게시판 전체 불러오기
  getEventPostList: (data) => instance.get("/api/v1/post/event1list", data),

  //이벤트 게시물 추가하기
  addEventPost: (data) => instance.post("/api/v1/post", data),

  //이벤트 게시물 불러오기
  getEventPost: (postId) => instance.get(`/api/v1/post/${postId}`),

  //이벤트 게시물 수정하기
  editEventPost: (post) => instance.patch(`/api/v1/post/postupdate/${post.postId}`, post),

  //이벤트 게시물 삭제하기
  deleteEventPost: (postId) => instance.delete(`/api/v1/post/postdelete/${postId}`),

  //좋아요 기능
  likeEventPost: (postId) => instance.patch(`/api/v1/like/${postId}`),

  //찜 기능
  saveEventPost: (postId) => instance.patch(`/api/v1/keep/${postId}`)
};

export const combinationPostApi = {
  // 꿀조합 게시글 작성하기
  postCombinationPost: (post) => instance.post("/api/v1/post", post),

  // 꿀조합 게시글 수정하기
  patchCombinationPost: (post) => instance.patch(`/api/v1/post/postupdate/${post.postId}`, post),

  // 꿀조합 게시글 삭제하기
  deleteCombinationPost: (postId) => instance.delete(`/api/v1/post/postdelete/${postId}`),

  // 꿀조합 게시글 불러오기
  getCombinationList: () => instance.get(`/api/v1/post/?page`),

  // 꿀조합 상세포스트 불러오기
  getCombinationPost: (postId) => instance.get(`/api/v1/post/${postId}`),

  // 꿀조합 게시물 찜 / 취소
  patchCombinationSave: (postId) => instance.patch(`/api/v1/keep/${postId}`),

  // 꿀조합 게시물 좋아요 / 취소
  patchCombinationLike: (postId) => instance.patch(`/api/v1/like/${postId}`)
};

export const uploadApi = {
  imageUpload: async function (imgObj) {
    try {
      const req = { postImg: imgObj };
      let formData = new FormData();
      for (let entry of Object.entries(req)) {
        formData.append(entry[0], entry[1]);
      }
      const response = await axios.post("http://54.180.137.99/api/v1/post/uploadimg", formData);
      if (response.statusText === "OK") return response;
    } catch (err) {
      alert(err);
    }
  }
};

//search api
export const searchApi = {
  searchTag: async function (tagList) {
    try {
      const req = {
        page: "1",
        option: "posttag1",
        content: tagList[0],
        option2: "posttag2",
        content2: tagList[1] ? tagList[1] : " ",
        option3: "posttag3",
        contnet3: tagList[2] ? tagList[2] : " "
      };
      const res = await instance.get("/api/v1/post/posttag", { params: req });
      if (res.statusText === "OK") return res.data;
    } catch (err) {
      alert(err);
    }
  }
};
