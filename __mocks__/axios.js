const get = url => {
    return Promise.resolve({ data: { user: {
        user_id: 2,
        username: "noam",
        firstname: "aviran",
        lastname: "giat",
        country: "israel",
        password: "$2a$13$swWEH6cljcDajc6m1.PkMeSJOaaSn9gZh4Dd56WdQD1zEm/GkVT46",
        email: "kotlar@post.bgu.ac.il",
        picture: "path",
      } } });
  };
  
  exports.get = get;