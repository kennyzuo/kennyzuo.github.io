new Vue({
  el: "#app",
  data() {
    return {
			previewImg: '',
      imgList: [
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./images/6.jpg",
      ],
    };
  },
  methods: {
    download() {
      let { imgList } = this;
      imgList.forEach((imgSrc) => {
        let img = new Image();
        img.src = imgSrc;
        img.onload = () => {};
      });

      let eleLink = document.createElement("a");
      // eleLink.download = ;
      eleLink.style.display = "none";
      eleLink.href = URL.createObjectURL(blob);
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    },
    changeHandler(e) {
			let { files } = e.target;
			let reader = new FileReader();
			reader.onload = e => { 
				this.previewImg = e.target.result; 
			 };

			console.log('createObjectURL', URL.createObjectURL(files[0]));
			reader.readAsDataURL(files[0]);
    },
  },
});
