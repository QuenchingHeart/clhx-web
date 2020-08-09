<template>
  <div class="webBody">
    <el-carousel :interval="4000" type="card" indicator-position="outside">
      <el-carousel-item v-for="img in topImages" :key="img.src">
        <el-image :src="img.path"></el-image>
      </el-carousel-item>
    </el-carousel>

    <el-row style="height: 450px">
      <el-col :offset="1" :span="11">
        <Card cardName="报道" :cardContent="reports" cardHeight="400px"></Card>
      </el-col>
      <el-col :offset="1" :span="10">
        <Card cardName="活动" :cardContent="activities" cardHeight="400px"></Card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="1" :span="11">
        <Card cardName="通知" :cardContent="notifications" cardHeight="300px"></Card>
      </el-col>
      <el-col :offset="1" :span="10">

        <el-carousel :interval="4000" indicator-position="outside">
          <el-carousel-item v-for="img in detailImages" :key="img.src">
            <el-image :src="img.path"></el-image>
          </el-carousel-item>
        </el-carousel>

      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.webBody {
  margin-top: 50px;
}
</style>

<script>
import Card from "./body/Card.vue";

export default {
  name: "webBody",
  components: {
    Card
  },
  data() {
    return {
      activities: [
        {
          title: "高科技进社区，无人机航拍定位垃圾投放点",
        },
        {
          title: "聚焦疫情“逆行者” 捕捉疫情中的平凡光辉",
        },
        {
          title: "淬炼青春，尽显青年力量",
        },
        {
          title: "自制火箭模型，玩转垃圾分类",
        },
        {
          title: "社区红领巾 国防强军梦",
        },
        {
          title: "“科研学霸”进社区开讲",
        },
        {
          title: "红心向党 | 捍卫一国两制——谈谈香港问题",
        },
        {
          title: "红心向党 | 为什么我们党始终能坚持人民至上",
        },
        {
          title: "红心向党 | 我想成为像他们那样的共产党员",
        },
        {
          title: "红心向党 | 中国共产党何以不断铸就辉煌",
        },
        {
          title: "红心向党 | 战疫一线党旗红",
        },
        {
          title: "两会之声 |《将急诊所用的急救药品纳入医保报销范畴》提案解读",
        },
        {
          title: "两会之声 |《建议减少家长陪作业任务》提案解读",
        },
        {
          title: "两会之声 |《推动在线教育立法，加强市场监管》提案解读",
        },
        {
          title: "两会之声 |《大力发展智慧社区养老》提案解读",
        },
        {
          title: "两会之声 |《把抗疫精神教育融入中小学专题教育》",
        },
        {
          title: "“校社联动”线上热议社区工作的“大学问”",
        },
        {
          title: "线上志愿帮帮团·秦淮社区进行时",
        },
      ],

      notifications: [
        {
          title: "淬炼红心 | “校社联动，共话两会”",
        },
        {
          title: "淬炼红心 | “线上志愿帮帮团”首批招募",
        },
      ],

      reports: [
        {
          title:
            "南航返校毕业生捐赠物资 ，通过“互联网+慈善超市”方式助力社区公益",
        },
        {
          title: "打包衣物、扛运物资，南航毕业生捐赠中感受劳动",
        },
        {
          title: "南航学子“联动”秦淮社区社工，共话社区工作的“大学问”",
        },
        {
          title: "百名大学生“连线”社区工作人员 共话社区工作“大学问”",
        },
        {
          title: "高校资源精准对接社区需求，南航“科研学霸”进社区开讲",
        },
        {
          title: "无人机航拍定位垃圾投放点，南航学生牵手高科技进社区",
        },
        {
          title: "“变废为宝”自制火箭模型",
        },
        {
          title: "国防教育进社区，南航学生讲述“红领巾”的故事",
        },
        {
          title: "南京航空航天大学：请放心，线上公益家教孩子很喜欢",
        },
        {
          title: "南航大学生志愿者为一线医护人员子女做家教",
        },
        {
          title: "南航460名学生组成“线上家教团” 为“逆行者”子女开展公益服务",
        },
        {
          title: "南航公益线上家教 让“最美逆行者”放宽心",
        },
        {
          title: "让“最美逆行者”没有后顾之忧，南航学生提供公益线上家教服务",
        },
        {
          title: "南航学生为“逆行者”子女 提供公益线上家教",
        },
        {
          title:
            "暖心！南航学子为浦口区抗“疫”一线工作者子女提供线上公益家教志愿服务",
        },
        {
          title: "@“最美逆行者”，请放心，南航公益线上家教孩子很喜欢",
        },
        {
          title: "南航学生化身“家教老师”：给“最美逆行者”子女特别的作业辅导",
        },
      ],

      topImages: [
        {
          path: "carousel/1.jpg",
        },
        {
          path: "carousel/2.jpg",
        },
        {
          path: "carousel/3.jpg",
        },
      ],

      detailImages: [
        {
          path: "detail/1.jpg"
        },
        {
          path: "detail/2.jpg"
        },
        {
          path: "detail/3.jpg"
        },
        {
          path: "detail/4.jpg"
        },
        {
          path: "detail/5.jpg"
        }
      ]
    };
  },
};
</script>