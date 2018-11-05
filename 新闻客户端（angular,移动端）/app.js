angular.module("app", ["ngRoute",'ngSanitize'])


    //获取频道数据控制器
    .controller("a", function ($scope,$rootScope) {
        $rootScope.list=[
            {"id":"1","title":"头条","status":true,"switch":false},
            {"id":"2","title":"新闻","status":true,"switch":true},
            {"id":"3","title":"财经","status":true,"switch":true},
            {"id":"4","title":"体育","status":true,"switch":true},
            {"id":"5","title":"娱乐","status":true,"switch":true},
            {"id":"6","title":"军事","status":true,"switch":true},
            {"id":"7","title":"汽车","status":true,"switch":true},
            {"id":"8","title":"科技","status":true,"switch":true},
            {"id":"9","title":"NBA","status":true,"switch":true},
            {"id":"10","title":"股票","status":true,"switch":true},
            {"id":"11","title":"星座","status":true,"switch":true},
            {"id":"12","title":"教育","status":true,"switch":true},
            {"id":"13","title":"女性","status":true,"switch":true},
            ]
            $rootScope.getchannel=function (a) {
                //获取当前频道ID
                console.log(a)
                //绑定当前频道ID
                $rootScope.activenum=a
                //输出当前点击频道的ID
                console.log("当前频道编号为："+$rootScope.activenum+"")
            }
            //设置默认频道为0
            $rootScope.activenum=0
        })



        //获取json数据
        .controller("getlist",function ($scope,$http,$rootScope) {
            $http({
                method:"get",
                url:"./json/json.json"
            }).then(function (res) {
                console.log(res.data)
                $rootScope.listdata=res.data
            },function (e) {
                console.log(e)
            })
        })



        //获取当前点击新闻的ID和全部json数据
        .controller("showCtrl",function ($scope,$routeParams,$rootScope) {
            console.log($routeParams.id)
            $scope.showid=$routeParams.id
            console.log("当前新闻ID为："+$scope.showid+"")
            $scope.showinfo=$rootScope.listdata
        })
        

        // .controller("getnews",function ($scope,$rootScope) {
        //     $rootScope.getnews=function (res) {
        //         console.log(res)
        //         $rootScope.myinput=res
        //         console.log($rootScope.myinput)
        //     }
        // })
        
        //路由模块
        .config(function ($routeProvider) {
            $routeProvider
                .when("/",{
                    templateUrl:"tpl/首页.html",
                    // controller:"getlist",
                })
                .when("/频道管理",{
                    templateUrl:"tpl/频道管理页.html",
                    // controller:"b"
                })
                .when("/我的主页",{
                    templateUrl:"tpl/我的主页.html",
                    
                })
                .when("/新闻搜索",{
                    templateUrl:"tpl/新闻搜索页.html",
                    // controller:"getnews"
                })
                .when("/新闻详情页/:id",{
                    templateUrl:"tpl/新闻详情页.html",
                    controller:"showCtrl", 
                })
                .when("/我的收藏",{
                    templateUrl:"tpl/我的收藏.html",
                    // controller:"getlist"
                })
                .when("/登录",{
                    templateUrl:"tpl/登录.html",
                    
                })
                .when("/注册",{
                    templateUrl:"tpl/注册.html",
                    
                })
        })
