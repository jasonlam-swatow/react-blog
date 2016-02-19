const helper = {
  randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  getTime() {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = new Date(),
        mon = month[d.getMonth()],
        day = d.getDate(),
        year = d.getFullYear();
    let completeDate = mon + ' ' + day + ', ' + year;

    return completeDate;
  },

  getTaggedName() {
    let keywords = ['es6', 'webpack', 'gulp', 'browserify', 'reactDOM', 'devTools'];

    return this.randomize(keywords);
  }
};

export default helper;