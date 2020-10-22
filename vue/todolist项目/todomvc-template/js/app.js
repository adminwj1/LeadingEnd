

var app =new Vue({
	el:"#app",
	data:{
		title:'Todo-List',
		todoData:[],
		// 用户输入
		inp_data:'',

		ched:false,
	},

	methods:{
		// 方法封装
		getall(){
			axios.get('http://localhost:3000/todolist').then((backData) => {
	
			// 获取对象中的数据
			var {data} = backData; 
			// then中是一个普通函数，那么函数中的this指向promise对象
			// this中使用一个箭头函数，this将被固定的指向vue示例对象
			this.todoData = data;
			// console.log(data);
			})
		},

		// 方法的简介声明方式
		// 添加任务
		add(){
			if(this.inp_data == ''){
				alert('内容不能为空!!!');
			}
			var id = this.todoData.length>0?this.todoData[this.todoData.length-1].id+1:1;
			var title = this.inp_data;
		// 	// 对象的简洁写法
			var data = {id,title,status:false};
		// 	// var data = {id:id,title:title,status:flase};
			axios({
				method:'post',
				url:'http://localhost:3000/todoList',
				data,
			}).then((backdata) =>{
				var {data,status} = backdata;
				if(status == 201){
					this.todoData.push(data);
					this.inp_data = '';
				}
			})
		},
		// 添加任务

		// 删除任务
		del(key){
			axios({
				method:'delete',
				url:'http://localhost:3000/todoList/' + this.todoData[key].id
			}).then((backdata)=>{
				var {status} = backdata;
				if(status == 200){
					this.todoData.splice(key,1);
				}
			})
		},
		// 删除任务

		// 全选与不全选
		chedAll(){
			var buer = !this.ched;
			for(let i=0; i<this.todoData.length; i++){
				this.todoData[i].status = buer;
				axios({
					method:'put',
					url:'http://localhost:3000/todoList/'+this.todoData[i].id,
					data:this.todoData[i]
				}).then((backdata) =>{
					if(backdata.status == 200){
						console.log(1);
					}
				})
			}
		},
		// 全选与全不选

		cleal(){
			for(let i=0; i<this.todoData.length; i++){
				if(this.todoData[i].status == true){
					axios({
						method:'delete',
						url:'http://localhost:3000/todoList' + this.todoData[i].id,
					}).then((backdata)=>{
						if(backdata.status == 200){
							this.getall();
						}
					})
				}
			}
		}
	},

	//	mounted这个方法会在页面渲染之前执行
	mounted:function(){
		this.getall();
	}
})