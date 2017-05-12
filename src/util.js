class util {

  constructor() {
    this.myTitle = "Dashboardly"
  }
  // let myTitle = 'dashboardly';

  changeTitle (title) {
    console.log("hello", title)
    this.myTitle = title;
  }

  getTitle (){
    return this.myTitle;
  }

}


export default new util();
