import{s as a}from"./request.83ecd05f.js";import{p as t,a as e,r as s,z as l,o as r,c as d,f as o,A as i,w as n}from"./vendor.02d980ab.js";const c={name:"Cluster",data:()=>({clusterList:[],query:{},loading:!1}),created(){this.getData()},methods:{getData(){this.loading=!0,a({url:"/light/v1/rc/cluster",method:"get"}).then((a=>{this.loading=!1,this.clusterList=a.data.data,console.log(this.clusterList)}))}}},p=n();t("data-v-61f8d8aa");const u={class:"container"};e();const h=p(((a,t,e,n,c,h)=>{const g=s("el-table-column"),b=s("el-table"),m=l("loading");return r(),d("div",null,[o("div",u,[i(o(b,{data:c.clusterList,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:p((()=>[o(g,{prop:"ip",label:"ip",width:"300",align:"center"}),o(g,{prop:"port",label:"port",width:"200",align:"center"}),o(g,{prop:"state",label:"state",width:"200",align:"center"})])),_:1},8,["data"]),[[m,c.loading]])])])}));c.render=h,c.__scopeId="data-v-61f8d8aa";export default c;
