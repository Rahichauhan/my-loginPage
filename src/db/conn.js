const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://rahichauhan36:Rahi123@cluster0.v5almxw.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log(`connection successful`);
}).catch((e) => {
  console.log(`no connection:${e}`);
})
