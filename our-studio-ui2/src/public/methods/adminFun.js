/*
* 公用方法
* */
export function amend(index, row){
    //关闭“是否删除”提示
    row.visible=false;
    //删除数据
    this.axios.get('http://49.234.9.206/Gaindata/delete_mysql.php',{
        params:{
            list:this.api,
            ID:row.ID
        }
    })
        .then(body => {//删除请求成功
            if(body.data.status_code == 1011){//删除状态码正常
                this.open2("删除数据成功");
                //加载最新数据
                this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php',{
                    params:{
                        list:this.api,
                    }
                })
                    .then(body => {//加载请求成功
                        if(body.data.status_code == 1009){//加载状态码正常
                            this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
                            this.metadata = body.data.datas;//存放真实数据
                            this.Deposit();
                            this.end(this.ye);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }else {//删除状态码异常
                this.open4("删除数据失败");
            }
        })
        .catch(error => {
            this.open4("删除数据失败");
            console.log(error);
        });
}



export function updatadataF(url,api){//api为请求携带参数,url为请求地址
    this.axios.post(url,this.$qs.stringify(api))
        .then(body => {//修改请求成功
            if(body.data.status_code == 1007){//修改状态码正常
                this.open2("修改数据成功");
                //加载最新数据
                this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php',{
                    params:{
                        list:this.api,
                    }
                })
                    .then(body => {//加载请求成功
                        if(body.data.status_code == 1009){//加载状态码正常
                            this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
                            this.metadata = body.data.datas;//存放真实数据
                            this.Deposit();
                            this.end(this.ye);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }else {//修改状态码异常
                this.open4("修改数据失败");
            }
        })
        .catch(error => {
            //修改请求失败
            this.open4("修改数据失败");
            console.log( "修改请求发送失败" +error);
        });
}


export function insertdataF(url,api){//api为请求携带参数,url为请求地址
    this.axios.post(url,this.$qs.stringify(api))
        .then(body => {//添加请求成功
            if(body.data.status_code == 1005){//添加状态码正常
                this.open2("添加数据成功");
                //加载最新数据
                this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php',{
                    params:{
                        list:this.api,
                    }
                })
                    .then(body => {//加载请求成功
                        if(body.data.status_code == 1009){//加载状态码正常
                            this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
                            this.metadata = body.data.datas;//存放真实数据
                            this.Deposit();
                            this.end(this.ye);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }else {//添加状态码异常
                this.open4("添加数据失败");
            }
        })
        .catch(error => {
            //修改请求失败
            this.open4("添加数据失败");
            console.log( "添加请求发送失败" + error);
        });
}



export function open2(hint) {
    this.$message({
        center:true,
        showClose: false,
        message: hint,
        type: 'success'
    });
}

export function open4(hint) {
    this.$message({
        center:true,
        showClose: false,
        message: hint,
        type: 'error'
    });
}

