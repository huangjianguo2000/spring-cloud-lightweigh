import{l as e}from"./service.29e8172a.js";import{p as a,a as t,r as l,o as r,c as s,f as o,t as i,w as d,i as c}from"./vendor.02d980ab.js";import"./request.83ecd05f.js";const n={name:"ServiceDetail",data:()=>({service:{},query:{}}),created(){let e=this.$route.params.serviceName;this.getData(e)},methods:{getData(a){e().then((e=>{for(let t=0;t<e.data.data.length;t++)console.log(e.data.data[t].serviceName+"--"+a),e.data.data[t].serviceName===a&&(this.service=e.data.data[t])}))},lookDetail(e){this.$message.error("还没有这个功能")},offlineService(e){this.$message.error("还没有这个功能")}}},m=d();a("data-v-162d1820");const f={class:"container"},p=o("h1",null,"服务详情",-1),v=c("编辑 "),h=c("下线 ");t();const u=m(((e,a,t,d,c,n)=>{const u=l("el-form-item"),b=l("el-form"),g=l("el-table-column"),_=l("el-button"),w=l("el-table");return r(),s("div",null,[o("div",f,[o("div",null,[p,o(b,{class:"from",ref:"form",model:c.service,"label-width":"80px"},{default:m((()=>[o(u,{label:"服务名称:  "},{default:m((()=>[o("p",null,i(c.service.serviceName),1)])),_:1})])),_:1},8,["model"])]),o(w,{data:c.service.hosts,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:m((()=>[o(g,{prop:"ip",label:"IP",width:"300",align:"center"}),o(g,{prop:"port",label:"端口",width:"200",align:"center"}),o(g,{prop:"healthy",label:"是否健康",width:"200",align:"center"}),o(g,{label:"操作",align:"center"},{default:m((e=>[o(_,{type:"text",onClick:a=>n.lookDetail(e.row)},{default:m((()=>[v])),_:2},1032,["onClick"]),o(_,{type:"text",onClick:a=>n.offlineService(e.row)},{default:m((()=>[h])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}));n.render=u,n.__scopeId="data-v-162d1820";export default n;
