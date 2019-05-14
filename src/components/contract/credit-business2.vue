<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div>
        <p
          style="font-size:10.5pt; line-height:140%; margin:0pt; orphans:0; text-align:center; widows:0"
        >
          <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">综合授信合同（适用于企业）</span>
        </p>
        <p style="margin:0pt 63pt 0pt 0pt; orphans:0; text-align:justify; widows:0;font-size:9pt">
          <span style="font-family:宋体; font-size:9pt">合同编号：</span>
          <input style="width: 80px; text-align: left;" v-model="info.contractNumber" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">被授信人（甲方）：</span>
          <input style="width:339px;" v-model="info.partyA" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件种类：</span>
          <input type="text" style="width: 360px;" v-model="info.a1">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件号码：</span>
          <input type="text" style="width: 360px;" v-model="info.a2">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">地址：</span>
          <input type="text" style="width: 384px;" v-model="info.a3">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input type="text" style="width: 360px;" v-model="info.phoneNumber">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">授信人（乙方）：</span>
          <span
              style="font-size:9pt; line-height:150%; display: inline-block;width: 352px;text-align:center;border-bottom:1px solid #000"
            >安徽省安振小额贷款有限公司</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">负责人：</span>
          <span
              style="font-size:9pt; line-height:150%; display: inline-block;width: 373px;text-align:center;border-bottom:1px solid #000"
            >潘 伟</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件种类：</span>
          <span style="font-size:9pt; line-height:150%; display: inline-block;width: 147px;text-align:center;border-bottom:1px solid #000">营业执照</span>
          <span style="font-family:宋体; font-size:9pt">证件号码：</span>
          <span style="font-size:9pt; line-height:150%; display: inline-block;width: 148px;text-align:center;border-bottom:1px solid #000">913401006941423604</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
          <span style="font-size:9pt; line-height:150%; display: inline-block;width: 361px;text-align:center;border-bottom:1px solid #000">合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <span style="font-size:9pt; line-height:150%; display: inline-block;width: 361px;text-align:center;border-bottom:1px solid #000">0551-65667870</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:center; widows:0">
          <a name="OLE_LINK1"></a>
          <a name="OLE_LINK2">
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
          </a>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >为了维护您的利益，在您签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">您所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“___”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您必须按约行使权利并主动承担义务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="-aw-bookmark-end:OLE_LINK1"></span>
          <span style="-aw-bookmark-end:OLE_LINK2"></span>
          <span style="font-family:宋体; font-size:9pt">双方经协商一致，于</span>
          <input style="width: 40px" v-model="info.a4" type="text">
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.a5" type="text">

          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.a6" type="text">

          <span style="font-family:宋体; font-size:9pt">日订立本合同，以共同遵照执行：</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条 授信额度及类别</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1.1</span>
          <span style="font-family:宋体; font-size:9pt">在本合同规定的条件下，乙方同意在授信额度有效期间内向甲方提供人民币</span>
          <input style="width: 50px" v-model="info.a7" type="text">
          <span
            style="font-family:宋体; font-size:9pt"
          >万元整的授信额度。在授信额度的有效期限及额度范围内，甲方使用上述授信额度时，不限次数，并可循环使用。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同项下授信额度的授信范围为甲方在乙方申请办理的人民币贷款业务。上述授信业务所用额度须经乙方同意。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条 授信期间</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
          <span style="font-family:宋体; font-size:9pt">本合同项下授信额度的有效使用期间为</span>
          <input style="width: 20px" v-model="info.a8" type="text">

          <span style="font-family:宋体; font-size:9pt">年，自</span>
          <input style="width: 40px" v-model="info.a9" type="text">

          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.a10" type="text">

          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.a11" type="text">

          <span style="font-family:宋体; font-size:9pt">日至</span>
          <input style="width: 40px" v-model="info.a12" type="text">

          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.a13" type="text">

          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.a14" type="text">

          <span style="font-family:宋体; font-size:9pt">日，但贷款额度的具体使用期限应受相关具体借款合同的约定。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >乙方有权对本合同项下授信额度使用情况进行不定期审查，如出现本合同第六条述明的情形，乙方有权调整授信期间及授信额度。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条 授信额度的使用</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">3.1</span>
          <span style="font-family:宋体; font-size:9pt">在本合同约定的授信期间和授信额度内，甲方可一次或分次向乙方书面申请使用该授信额度。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">3.2</span>
          <span style="font-family:宋体; font-size:9pt">甲方申请使用的授信额度余额（即使用中尚未归还的累计本金数额）在任何时候都不得超过本合同第</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >款约定的授信额度。在授信期间内，甲方对已归还的授信额度可循环使用，授信期间内未使用的授信额度在授信期间届满后自动取消。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">3.3</span>
          <span style="font-family:宋体; font-size:9pt">甲方必须在本合同第</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >款约定的授信期间内申请使用授信额度，每笔授信项目的开始使用日期不得超过授信期间的截止日，该截止日包括调整后授信期间的截止日。每笔授信项目的使用期限依所签的具体合同或协议约定。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">3.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >乙方与甲方就每一项具体授信所签订的合同或协议与本合同不一致的，以该具体合同或协议为准，但甲方一起对本合同项下或与本合同相关的具体业务合同或协议项下的任何和一切债务承担的连带责任不得因此无效或解除。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条 甲方的权利与义务</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.1</span>
          <span style="font-family:宋体; font-size:9pt">对于授信资金的使用，应符合法律的规定和合同或协议的约定。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >在授信期间内，未经乙方书面同意，不得采取兼并、收购、分立等任何形式的资产重组活动或有任何形式的承包、租赁等改变企业经营权活动，或进行改变企业组织机构、经营方式的活动，或者增减注册资本、股权和重大投资改变等情形。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.3</span>
          <span style="font-family:宋体; font-size:9pt">如有法定代表人或法人住所地、营业地更换、通讯地址变更，应在更换或改变之日起三个工作日内书面通知乙方，并附相关证明材料。如甲方未依据上述约定将其变更后通讯地址告知乙方，乙方依其合同载明通讯地址向其送达相关文书，即视为乙方已有效送达。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.4</span>
          <span style="font-family:宋体; font-size:9pt">依约偿还授信资金的本息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条 乙方的权利与义务</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >如果甲方申请使用授信额度符合国家法律法规、政策规定和乙方的信贷规则，乙方应批准申请并按所签的具体合同或协议及时履行相应义务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.2</span>
          <span style="font-family:宋体; font-size:9pt">除有本合同第六条约定情形外，乙方不得随意对授信期间和最高授信额度作出不利于甲方的调整。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >对甲方在本协议及具体协议项下的到期未付应付款项，乙方有权从甲方在各类金融机构开立的任何账户中扣款以实现其债权，上述扣款行为无须事先征得甲方或其下属公司的同意；乙方有权随时检查甲方资金使用情况。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条 授信额度的调整</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
          <span style="font-family:宋体; font-size:9pt">如发生以下事件之一即构成甲方违约：（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:宋体; font-size:9pt">）甲方向乙方提供虚假的资料、信息或故意隐瞒与订立本合同有关的重要事实；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span style="font-family:宋体; font-size:9pt">）甲方没有按期偿还到期的与乙方有关的债务，包括但不限于本合同约定及每笔具体授信项目合同或协议约定的本金、利息、违约金、其他费用或任何应付款项；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
          <span style="font-family:宋体; font-size:9pt">）甲方没有按照本合同或与乙方签订的其他有关合同或协议约定的用途使用授信资金；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
          <span style="font-family:宋体; font-size:9pt">）甲方或担保人未完全履行或未履行本合同或与乙方签订的其他有关合同或协议项下的任何义务或没有完全遵守其中的任一规定，或在接到乙方书面通知后没有采取令乙方满意的补救措施；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
          <span style="font-family:宋体; font-size:9pt">）为本合同或本合同项下借款合同提供担保的抵押物或质物被查封、冻结或价值明显减少，影响到乙方权利而抵押人或出质人未增加相应担保的；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
          <span style="font-family:宋体; font-size:9pt">）甲方经营状况或财务状况恶化，或丧失商业信誉；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
          <span style="font-family:宋体; font-size:9pt">）甲方有转移财产、抽逃资金及其它逃避债务的行为；甲方与第三人发生纠纷、诉讼、仲裁、行政处罚或其它乙方认为会对其权益带来威胁或不利的事件，可能影响甲方履行本合同项下义务的；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:宋体; font-size:9pt">）无论任何原因导致甲方已经或将要丧失还款能力；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
          <span style="font-family:宋体; font-size:9pt">）部分或全部担保条款或担保文件未生效、无效、被撤销，甲方未按乙方要求落实新的担保的；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">10</span>
          <span style="font-family:宋体; font-size:9pt">）发生据乙方合理的判断可能会危及、损害乙方权益的与本合同有关的其他事件。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6.2</span>
          <span style="font-family:宋体; font-size:9pt">违约事件发生或出现本合同第</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
          <span style="font-family:宋体; font-size:9pt">款约定的情形，乙方有权根据情节轻重调整、减少或终止本授信额度及授信期间，并有权采取但不限于以下部分或全部措施：（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:宋体; font-size:9pt">）宣布直接或间接源于本合同的一切债务提前到期，并要求甲方立即清偿；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span style="font-family:宋体; font-size:9pt">）要求甲方承担乙方因实现债权而发生的各项合理费用（包括但不限于诉讼费、律师费、财产保全费、保全担保费、鉴定费、公告费、评估费、差旅费等）；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
          <span style="font-family:宋体; font-size:9pt">）要求甲方提供或追加担保，担保的形式包括保证、抵押和质押；（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
          <span style="font-family:宋体; font-size:9pt">）采取维护其在本合同项下权益的符合有关法律规定的其他措施。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条 担保</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >为保证本合同项下的债权能得到清偿，将签订以下合同，为甲方履行本合同及与本合同相关的每笔具体业务合同或协议项下债务提供担保：</span>
        </p>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c1" type="checkbox">
          <input style="width: 190px" v-model="info.a15" type="text">
          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.a16" type="text">
          <span style="font-family:宋体; font-size:9pt">《最高额保证合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c2" type="checkbox">
          <input style="width: 190px" v-model="info.a17" type="text">

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.a18" type="text">

          <span style="font-family:宋体; font-size:9pt">《最高额保证合同（适用于个人保证）》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c3" type="checkbox">
          <input style="width: 190px" v-model="info.a19" type="text">

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.a20" type="text">

          <span style="font-family:宋体; font-size:9pt">《最高额抵押合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c4" type="checkbox">
          <input style="width: 190px" v-model="info.a21" type="text">

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.a22" type="text">

          <span style="font-family:宋体; font-size:9pt">《最高额质押合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c5" type="checkbox">
          <span style="font-family:宋体; font-size:9pt">其他</span>
          <input style="width: 580px" v-model="info.a23" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条 合同生效、变更和解除</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同经甲方法定代表人签字并加盖公章及乙方负责人签字并加盖公章后生效。本合同生效后，甲、乙双方任何一方不得擅自变更或提前解除本合同。需要变更或解除时，应经双方协商一致，并达成书面协议。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条 争议和解决</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同在履行过程中发生争议，可以通过协商解决，协商不成，向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条 附则</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">10.1</span>
          <span style="font-family:宋体; font-size:9pt">合同一式</span>
          <input style="width: 20px" v-model="info.a24" type="text">
          <span style="font-family:宋体; font-size:9pt">份，每份具有同等法律效力。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">10.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >乙方与甲方依据本合同就每一项具体授信所签订的借款合同或协议均为本合同的组成部分，并构成一个合同整体。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">10.3</span>
          <span style="font-family:宋体; font-size:9pt">甲方确认:本合同履行过程中以及因履行合同发生争议引起诉讼、仲裁时，以下地址作为合同相对方、人民法院、仲裁机构等送达有关通知、相关法律文书的接收地址：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">送达地址：</span>
          <input style="width: 558px" v-model="info.a25" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">收件人：</span>
          <input style="width: 570px" v-model="info.a26" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input style="width: 558px" v-model="info.a27" type="text">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方认可：如因上述送达地址、收件人不准确，或送达地址、收件人变更但未及时告知合同相对人，或收件人拒绝签收等原因，导致通知或相关法律文书未能被甲方实际接收的，文书退回之日视为送达之日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">10.4</span>
          <span style="font-family:宋体; font-size:9pt">其他约定事项：</span>
          <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.extra"></textarea>
        </p>
        <p style="font-size:9pt; line-height:130%; margin:0pt; text-align:justify">
          <span style="font-family:'Times New Roman'; font-size:9pt"></span>
        </p>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0;    widows:0">
          <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
        </p>
        <div>
          <div class="clearfix">
            <div
              style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: left"
            >
              <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
              <input type="text" style="width: 150px;" v-model="info.a28">
            </div>
            <div
              style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right"
            >
              <span style="font-family:宋体; font-size:9pt">乙方（公章）：</span>
              <input type="text" style="width: 150px;" v-model="info.a29">
            </div>
          </div>
          <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
          <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0; widows:0">
            <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
          </p>
          <div class="clearfix">
            <div
              style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: left"
            >
              <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
                <span style="font-family:宋体; font-size:9pt">法定代表人（签字）：</span>
                <input type="text" style="width: 150px;" v-model="info.a34">
              </p>
            </div>

            <div
              style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right"
            >
              <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
                <span style="font-family:宋体; font-size:9pt">负责人（签字）：</span>
                <input type="text" style="width: 150px;" v-model="info.a30">
              </p>
            </div>
          </div>
        </div>

        <br style="clear:both; mso-break-type:section-break; page-break-before:auto">

        <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:right; widows:0">
          <span style="font-family:宋体; font-size:9pt">签约时间：</span>
          <input type="text" style="width: 40px;" v-model="info.a31">

          <span style="font-family:宋体; font-size:9pt">年</span>
          <input type="text" style="width: 20px;" v-model="info.a32">

          <span style="font-family:宋体; font-size:9pt">月</span>
          <input type="text" style="width: 20px;" v-model="info.a33">

          <span style="font-family:宋体; font-size:9pt">日</span>
          <span style="font-family:宋体; font-size:9pt"></span>
          <span style="font-family:宋体; font-size:9pt">签约地点：</span>
          <input type="text" style="width: 50px;" v-model="info.contractCreateAddress">
        </p>
    </div>

    <!-- 操作 -->
    <div class="operate-box" v-if="status === 'new' || status === 'draft'">
      <br>
      <div class="submit-btn btn" @click="submit">提交审核</div>
      <div class="save-btn btn" @click="save">保存</div>
    </div>

    <div class="operate-box" v-else-if="status === 'operate'">
      <div>操作：</div>
      <br>
      <textarea name id cols="30" rows="10" placeholder="备注信息" v-model="info.auditTip"></textarea>
      <div class="save-btn btn" type="danger" @click="reject">审核拒绝</div>
      <div class="submit-btn btn" type="success" @click="pass">审核通过</div>
    </div>
  </div>
</template>
<script>
// 最高额抵押
export default {
  props: {
    infoData: {
      default: () => {
        return {
          contractNumber: "",
          partyA: "",
          phoneNumber: "",
          a1: "",
          a2: "",
          a3: "",
          a4: "",
          a5: "",
          a6: "",
          a7: "",
          a8: "",
          a9: "",
          a10: "",
          a11: "",
          a12: "",
          a13: "",
          a14: "",
          a15: "",
          a16: "",
          a17: "",
          a18: "",
          a19: "",
          a20: "",
          a21: "",
          a22: "",
          a23: "",
          a24: "",
          a25: "",
          a26: "",
          a27: "",
          a28: "",
          a29: "",
          a30: "",
          a31: "",
          a32: "",
          a33: "",
          a34: "",
          c1: "",
          c2: "",
          c3: "",
          c4: "",
          c5: "",
          extra:
            "各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0023"
        };
      }
    },
    status: ""
  },
  data() {
    return {
      info: {
        contractNumber: "",
          partyA: "",
          phoneNumber: "",
          a1: "",
          a2: "",
          a3: "",
          a4: "",
          a5: "",
          a6: "",
          a7: "",
          a8: "",
          a9: "",
          a10: "",
          a11: "",
          a12: "",
          a13: "",
          a14: "",
          a15: "",
          a16: "",
          a17: "",
          a18: "",
          a19: "",
          a20: "",
          a21: "",
          a22: "",
          a23: "",
          a24: "",
          a25: "",
          a26: "",
          a27: "",
          a28: "",
          a29: "",
          a30: "",
          a31: "",
          a32: "",
          a33: "",
          a34: "",
          c1: "",
          c2: "",
          c3: "",
          c4: "",
          c5: "",
          extra:
            "各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0023"
      }
    };
  },
  created() {
    this.$nextTick(() => {
      let textareas = document.querySelectorAll("textarea");
      textareas.forEach(v => {
        v.style.height = v.scrollHeight + "px";

        // v.value = v.value.trim()
        v.addEventListener("input", e => {
          // console.log("1--->", e.target.scrollHeight);
          e.target.style.height = "auto";
          // console.log("2--->", e.target.scrollHeight);
          e.target.style.height = e.target.scrollHeight + "px";
        });
      });

      let inputs = document.querySelectorAll("input");
      inputs.forEach(v => {
        v.style.width = v.scrollWidth + "px";

        v.setAttribute("data-width", +v.style.width.replace("px", ""));
        let arr = [];

        v.addEventListener("input", e => {
          if (+e.target.dataset.length > e.target.value.length) {
            let delCount = e.target.dataset.length - e.target.value.length;
            // 删除
            arr = JSON.parse(e.target.dataset.scroll);
            for (var i = 0; i < delCount; i++) {
              arr.pop();
            }
            if (arr.length == 0) {
              e.target.style.width = e.target.dataset.width + "px";
            } else {
              e.target.style.width = arr[arr.length - 1] + "px";
            }
          } else {
            // 增加
            e.target.style.width = e.target.scrollWidth + "px";

            let addLength;
            let lastWidth;

            if (
              !e.target.dataset.scroll ||
              e.target.dataset.scroll.length == 2
            ) {
              // 第一次增加
              addLength = e.target.value.length; // 增加的字数为当前输入框的字数
              lastWidth = 0;
              // console.log("firstadd: addlength = " + addLength);
              // console.log("firstadd: lastWidth = " + lastWidth);
            } else {
              addLength = e.target.value.length - e.target.dataset.length; // 拿到增加的数量
              arr = JSON.parse(e.target.dataset.scroll);
              lastWidth = arr[arr.length - 1];
              // console.log("addlength = " + addLength);
              // console.log("lastWidth = " + lastWidth);
            }

            let currentWidthStr = e.target.style.width;
            let currentWidth = parseInt(
              currentWidthStr.substr(0, currentWidthStr.length - 2)
            );
            let everyWidth = Math.ceil((currentWidth - lastWidth) / addLength); // 这是每次增加的长度
            // console.log("currentWidth:  = " + currentWidth);
            // console.log("everyWidth = " + everyWidth);
            for (var i = 1; i < addLength + 1; i++) {
              let val = lastWidth + everyWidth * i;
              // console.log(val);
              arr.push(
                val <= e.target.dataset.width ? +e.target.dataset.width : val
              );
            }
          }

          e.target.setAttribute("data-scroll", JSON.stringify(arr));
          e.target.setAttribute("data-length", e.target.value.length);
        });
      });
    });
  },
  methods: {
    /**
     * 禁用表单
     */
    inputDisable() {
      this.$nextTick(() => {
        let input = document.querySelectorAll(
          ".contract-content input, .contract-content textarea"
        );
        // console.log(input);
        input.forEach(v => {
          v.setAttribute("readonly", true);
        });
      });
    },
    inputListener() {
      // console.log(info.b)
    },
    save() {
      this.$emit("save", this.info);
    },
    submit() {
      this.$emit("submit", this.info);
    },
    reject() {
      this.$emit("reject", this.info);
    },
    pass() {
      this.$emit("pass", this.info);
    }
  },
  computed: {
    errorLogs() {
      return this.$store.getters.errorLogs;
    }
  },
  watch: {
    infoData: {
      handler(nv, ov) {
        if (nv.contractNumber !== undefined) {
          // 如果没有值，就给个空值
          if (nv["operateTip"] === undefined) {
            nv["operateTip"] = "";
          }
          if (nv["auditTip"] === undefined) {
            nv["auditTip"] = "";
          }
          if (nv["contractType"] === undefined) {
            nv["contractType"] = "0013";
          }
          // console.log("赋值");
          this.info = nv;
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style scoped>
.contract-wrap {
  width: 650px;
  /* height: 891px; */
  /* background-color: red; */
  margin: 0 auto;
  /* overflow-x: hidden; */
  position: relative;
}

input {
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;
}

textarea {
  /* width: 630px; */
  resize: none;
  /* text-align: center; */
  overflow-y: hidden;
  border: none;
  text-decoration: underline;
  line-height: 170%;
  width: 630px;
  resize: none;
  font-family: "宋体";
  font-size: 9pt;
  font-weight: 600;
}

table textarea {
  text-decoration: none;
}

.btn {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
}

.save-btn {
  background-color: #67c23a;
  float: right;
}

.submit-btn {
  background-color: #67c23a;
  float: right;
}

.operate-box {
  height: 300px;
  margin-top: 100px;
}

.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
