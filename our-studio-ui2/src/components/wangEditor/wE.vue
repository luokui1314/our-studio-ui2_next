<template>
    <div>
        <div id="editor"></div>
        <el-button type="primary" @click="zh">转换为html格式</el-button>
        <el-button type="primary" @click="zt">转换为text格式</el-button>
        <p>转换结果：</p>
        <textarea name="a" id="a" cols="250" rows="20">
      {{htmltext}}
    </textarea>

    </div>
</template>

<script>
    import Editor from 'wangeditor'
    export default {
        name: "wE",
        data(){
            return{
                htmltext:'',
            }
        },
        mounted(){
            this.editor = new Editor("#editor");
            this.editor.create();
        },
        methods: {
            zh(){
                this.htmltext = this.editor.txt.html()
            },
            zt(){
                this.htmltext = this.editor.txt.text()
            },
        }
    }
</script>

<style scoped>

</style>
