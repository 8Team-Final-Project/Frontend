// 개발 모드에서만 console.log가 찍히는 logger
export const logger = msg => {
    if (process.env.NODE_ENV === "production") {
        return;
    }
    console.log(msg);
};

//일단 local에서 받아오는 것으로 하였음. 추후 변경요망
export const getToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        return `Bearer ${token}`;
    } else {
        return null;
    }
};
