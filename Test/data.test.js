const {getFromTable} = require('../Data_Layer/sqlScripts');

test('Get table from db', () =>{
    const text = getFromTable('dbo.Users', ['*'],[`username='admin'`]);
    expect(text).toBe([
        {
          user_id: 3,
          username: "admin",
          firstname: "aviran",
          lastname: "giat",
          country: "israel",
          password: "$2a$13$93Z5lj.XpBvF7ZXFW5zB7uLkr6KmX.V58j6Z8cogIlc7lwg4GRfY.",
          email: "kotlar@post.bgu.ac.il",
          picture: "path",
        },
      ]);
});



