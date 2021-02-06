// this function is to get the todos from the database
const getSubscribes = () => {
  // this is a get request because by default it's already a get request
  return fetch("/user/subscribes").then((response) => {
    // since passport automatically sends a 401 unathorized if you are not
    // authenticated already, so in order to combat this, what we are gonna
    //  do is write our won response client side.
    if (response.status !== 401) {
      // but if it isn't a 401 request, that
      // means we already wrote a response on the server side
      return response.json().then((data) => data);
    } else return { message: { msgBody: "UnAuthorized", msgError: true } };
  });
};

const deleteSubscribe = (id) => {
  // findOneAndDelete({ _id: id })
  // this is a get request because by default it's already a get request
  return fetch(`user/subscribe/${id}`, {
    method: "delete",
  }).then((response) => {
    // since passport automatically sends a 401 unathorized if you are not
    // authenticated already, so in order to combat this, what we are gonna
    //  do is write our won response client side.
    if (response.status !== 401) {
      // but if it isn't a 401 request, that
      // means we already wrote a response on the server side
      return response.json().then((data) => data);
    } else return { message: { msgBody: "UnAuthorized", msgError: true } };
  });
};

// this function is to create todo
const postSubscribe = (sub) => {
  return fetch("/user/subscribe", {
    method: "post",
    body: JSON.stringify(sub),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 401) {
      return response.json().then((data) => data);
    } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
  });
};

const SubscribeService = {
  getSubscribes: getSubscribes,
  postSubscribe: postSubscribe,
  deleteSubscribe: deleteSubscribe,
};

export default SubscribeService;
