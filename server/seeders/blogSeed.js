const db = require("../models");
let mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ProjectThree",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection err:\n${err}`);
});

const seedUsers = [
  {
    email: "test1@test.com",
    password: "test",
  },
  {
    email: "test2@test.com",
    password: "test",
  },
  {
    email: "test3@test.com",
    password: "test",
  },
];

db.Users.deleteMany({})
  .then(() => db.Users.collection.insertMany(seedUsers))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const blogs = [
  {
    email: "test1@test.com ",
    city: "Boston",
    state: "MA",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    email: "test1@test.com ",
    city: "Boston",
    state: "MA",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    email: "test1@test.com ",
    city: "Charlotte",
    state: "NC",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/04/charlotte.jpg",
  },
  {
    email: "test1@test.com ",
    city: "Charlotte",
    state: "NC",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/04/charlotte.jpg",
  },
  {
    email: "test1@test.com ",
    city: "New York",
    state: "NY",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg",
  },
  {
    email: "test1@test.com ",
    city: "New York",
    state: "NY",
    blog:
      "Phasellus dictum est est, sit amet accumsan nisl fringilla pellentesque. Sed pharetra, nisl non sollicitudin commodo, odio odio gravida mauris, ut eleifend ligula tellus id odio. Suspendisse ut libero tempor, lobortis diam id, rhoncus dolor. In dignissim nisi aliquet congue bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis facilisis lorem, a maximus nulla. Phasellus varius pulvinar diam tincidunt interdum. Maecenas at justo turpis. Nullam justo libero, imperdiet vel euismod posuere, cursus in dui. Donec faucibus libero id efficitur accumsan. Fusce vestibulum eleifend nisl at aliquam. Nam est metus, eleifend vitae tempor at, dignissim et diam. Nulla quam urna, egestas in nulla a, sollicitudin pharetra lacus. Aliquam quis augue massa. Duis dolor lorem, gravida ac ligula id, tempor volutpat nunc.",
    image:
      "https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg",
  },
];

db.Blogs.deleteMany({})
  .then(() => db.Blogs.collection.insertMany(blogs))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
