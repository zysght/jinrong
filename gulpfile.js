var obj=[
	{
		images:"Content/images/like-one.jpg",
		title:"上汽大众-全新旅途L",
		content:"上汽大众-全新旅途L享2年0利率",
		price:"1.44万",
		save:"1元"
	},
	{
		images:"Content/images/like-two.jpg",
		title:"上汽大众-全新旅途L",
		content:"上汽大众-全新旅途L享2年0利率",
		price:"1.44万",
		save:"1元"
	},
	{
		images:"Content/images/like-three.jpg",
		title:"上汽大众-全新旅途L",
		content:"上汽大众-全新旅途L享2年0利率",
		price:"1.44万",
		save:"1元"
	},
	{
		images:"Content/images/like-four.jpg",
		title:"上汽大众-全新旅途L",
		content:"上汽大众-全新旅途L享2年0利率",
		price:"1.44万",
		save:"1元"
	}
]
var gulp=require("gulp");
var webserver=require("gulp-webserver");
var connect=require("gulp-connect");
var urlTool=require("url");
var qs=require("qs");
gulp.task("mockServer",function(){
	gulp.src('.')
		.pipe(webserver({
			port:3000,
			middleware:function(req,res,next){
				var method=req.method;
				var urlobj=urlTool.parse(req.url);
				var pathname=urlobj.pathname;
				res.setHeader('Access-Control-Allow-Origin','*');
				if(method=='GET'){
					switch(pathname){
						case '/goodslist':
							res.setHeader('content-type','application/json;charset=utf-8');
							res.write(JSON.stringify(obj));
							res.end();
							break;
						default: break;
					}
				}
			}
		}))
})