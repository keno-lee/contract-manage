<template>
  <div class="contract-wrap">
    <div>
      <p
        style="font-size:10.5pt; line-height:200%; margin:0pt; orphans:0; text-align:center; widows:0"
      >
        <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">借款合同（适用于个人）</span>
      </p>
      <p style="font-size:9pt; margin:0pt 63pt 0pt 0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt">合同编号：</span>
        <input style="width: 80px; text-align: left;" v-model="info.contractNumber" type="text">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款人（甲方）</span>
        <span style="font-family:宋体; font-size:9pt">：</span>
        <input type="text" style="width: 347px;" v-model="info.partyA">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">证件种类：</span>
        <input type="text" style="width: 360px;" v-model="info.a1">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">证件号码：</span>
        <input type="text" style="width: 360px;" v-model="info.a2">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">地址：</span>
        <input type="text" style="width: 384px;" v-model="info.a3">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">联系电话：</span>
        <input type="text" style="width: 360px;" v-model="info.phoneNumber">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">贷款人（乙方）</span>
        <span style="font-family:宋体; font-size:9pt">：</span>
        <span
          style="font-size:9pt; line-height:150%; display: inline-block;width: 347px;text-align:center;border-bottom:1px solid #000"
        >安徽省安振小额贷款有限公司</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">负责人：</span>
        <span
          style="font-size:9pt; line-height:150%; display: inline-block;width: 372px;text-align:center;border-bottom:1px solid #000"
        >潘 伟</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
        <span
          style="font-size:9pt; line-height:150%; display: inline-block;width: 360px;text-align:center;border-bottom:1px solid #000"
        >合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">联系电话：</span>
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <span
          style="font-size:9pt; line-height:150%; display: inline-block;width: 360px;text-align:center;border-bottom:1px solid #000"
        >0551-65667870</span>
      </p>
      <p
        style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-align:center; text-indent:20pt; widows:0"
      >
        <a name="_Hlk6927886"></a>
        <a name="_Hlk6927913">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
        </a>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >为了维护您的利益，在您签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">您所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >您有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >您已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“___”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您必须按约行使权利并主动承担义务。</span>
        <span style="-aw-bookmark-end:_Hlk6927886"></span>
      </p>
      <p style="margin:0pt; orphans:0; widows:0">
        <span style="-aw-bookmark-end:_Hlk6927913"></span>
        <span style="font-family:'Times New Roman'; font-size:9pt"></span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方向乙方申请借款，乙方同意向甲方发放贷款。根据有关法律法规和规章，甲乙双方经协商一致，订立本合同，以便共同遵守。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.1</span>
        <span style="font-family:宋体; font-size:9pt">借款金额</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">: (</span>
        <span style="font-family:宋体; font-size:9pt">大写</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">)</span>
        <input style="width: 100px" v-model="info.a4" type="text">
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.2</span>
        <span style="font-family:宋体; font-size:9pt">借款币种</span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt">：</span>
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <input style="width: 50px" v-model="info.a5" type="text">
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.3</span>
        <span style="font-family:宋体; font-size:9pt">借款期限：自</span>
        <input style="width: 50px" v-model="info.a6" type="text">
        <span style="font-family:宋体; font-size:9pt">年</span>
        <input style="width: 30px" v-model="info.a7" type="text">
        <span style="font-family:宋体; font-size:9pt">月</span>
        <input style="width: 30px" v-model="info.a8" type="text">
        <span style="font-family:宋体; font-size:9pt">日至</span>
        <input style="width: 50px" v-model="info.a9" type="text">
        <span style="font-family:宋体; font-size:9pt">年</span>
        <input style="width: 30px" v-model="info.a10" type="text">
        <span style="font-family:宋体; font-size:9pt">月</span>
        <input style="width: 30px" v-model="info.a11" type="text">
        <span style="font-family:宋体; font-size:9pt">日。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.4</span>
        <span style="font-family:宋体; font-size:9pt">本合同项下的借款仅限用于：</span>
        <input style="width: 70px" v-model="info.a12" type="text">
        <span style="font-family:宋体; font-size:9pt">，未经乙方书面同意，甲方不得改变借款用途。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.5</span>
        <span style="font-family:宋体; font-size:9pt">本合同项下的借款期限起始日与借款借据不一致时，以借款借据所载实际放款日期为准，分期提款的以第一次放款时的借款借据所载实际放款日期为准切借款期限不予延长。借款借据是本合同的组成部分，与本合同具有同等法律效力。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">利率及利息的计付</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
        <span style="font-family:宋体; font-size:9pt">利率：本合同执行月利率</span>
        <input style="width: 30px" v-model="info.a13" type="text">
        <span style="font-family:'Times New Roman'; font-size:9pt">‰</span>
        <span style="font-family:宋体; font-size:9pt">。该利率系中国人民银行现行相应期限档次贷款的基准利率上浮</span>
        <input style="width: 30px" v-model="info.a14" type="text">
        <span style="font-family:'Times New Roman'; font-size:9pt">%</span>
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >本合同签订后、放款前，如遇中国人民银行调整法定利率的，贷款人将按相应利率档次执行调整后的利率，利率浮动水平按</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
        <span style="font-family:宋体; font-size:9pt">条约定执行。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.3</span>
        <span style="font-family:宋体; font-size:9pt">本合同项下贷款实际发放后，利率执行下列第</span>
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <input type="text" style="width: 30px;" v-model="info.a15">

        <span style="font-family:宋体; font-size:9pt">种：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）浮动利率：遇中国人民银行调整法定利率的，自法定利率调整日的次日起，按相应利率档次执行调整后的利率，利率浮动水平按</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >条的约定执行。借款人在本合同利率调整日当日还款的，该期贷款仍执行调整前利率；借款人在本合同利率调整日后还款的，该期贷款按相应利率档次执行调整后的利率。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）固定利率：遇中国人民银行调整法定利率的，仍执行本合同</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
        <span style="font-family:宋体; font-size:9pt">条约定的月利率。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.4</span>
        <span style="font-family:宋体; font-size:9pt">利息的计算</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）借款人每月还息额＝当月贷款余额</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">×</span>
        <span style="font-family:宋体; font-size:9pt">贷款天数</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">×</span>
        <span style="font-family:宋体; font-size:9pt">日利率</span>
        <span style="font-family:宋体; font-size:9pt">（日利率</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">=</span>
        <span style="font-family:宋体; font-size:9pt">月利率</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">/30</span>
        <span style="font-family:宋体; font-size:9pt">）</span>
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）逾期贷款和挪用贷款的罚息依逾期或挪用的金额和实际天数计算。逾期贷款的罚息利率按本合同约定利率上浮</span>
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <input type="text" style="width: 30px;" v-model="info.a16">

        <span style="font-family:宋体; font-size:9pt">％，挪用贷款的罚息利率按本合同约定利率上浮</span>
        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <input type="text" style="width: 30px;" v-model="info.a17">
        <span
          style="font-family:宋体; font-size:9pt"
        >％；浮动利率贷款逾期或挪用后遇人民银行调整基准利率的，贷款人有权相应调整本合同罚息利率，自人民银行利率调整日起适用新的罚息利率。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.5</span>
        <span style="font-family:宋体; font-size:9pt">本合同项下的贷款按下列第</span>
        <input type="text" style="width: 30px;" v-model="info.a18">
        <span style="font-family:宋体; font-size:9pt">种方式结息，贷款最后到期时利随本清。结息日为付息日：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）每季末月的</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">20</span>
        <span style="font-family:宋体; font-size:9pt">日结息；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）每月的</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">20</span>
        <span style="font-family:宋体; font-size:9pt">日结息。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款的发放</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">3.1</span>
        <span style="font-family:宋体; font-size:9pt">除乙方全部或部分放弃外，只有持续满足下列前提条件，乙方才有义务向甲方发放借款：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）甲方已办妥与本合同项下贷款有关的批准、登记、交付、保险及其他法定手续；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）甲方在第七条项下所作的陈述与保证是真实的；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）本合同设有担保的，符合乙方要求的担保已生效且持续有效；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
        <span style="font-family:宋体; font-size:9pt">）甲方没有发生本合同所约定的任一违约事项或任何可能危及乙方债权安全的情形；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
        <span style="font-family:宋体; font-size:9pt">）法律法规、规章或有权部门不禁止且不限制乙方发放本合同项下的借款；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
        <span style="font-family:宋体; font-size:9pt">）其他先决条件：</span>
        <input type="text" style="width: 150px;" v-model="info.a19">

        <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">3.2</span>
        <span style="font-family:宋体; font-size:9pt">甲方选择下述第</span>
        <input type="text" style="width: 30px;" v-model="info.a20">

        <span style="font-family:宋体; font-size:9pt">种放款方式：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）</span>
        <span style="font-family:宋体; font-size:9pt">借款人以本人名义在</span>
        <input type="text" style="width: 150px;" v-model="info.a21">

        <span style="font-family:宋体; font-size:9pt">（银行）开立存款帐户，账号：</span>
        <input type="text" style="width: 150px;" v-model="info.a22">

        <span style="font-family:宋体; font-size:9pt">，作为贷款人发放贷款的账户。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）借款人书面确认将贷款发放至指定账户，户名：</span>
        <input type="text" style="width: 150px;" v-model="info.a23">

        <span style="font-family:宋体; font-size:9pt">，账号：</span>
        <input type="text" style="width: 150px;" v-model="info.a24">

        <span style="font-family:宋体; font-size:9pt">，开户行：</span>
        <input type="text" style="width: 150px;" v-model="info.a25">

        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款的偿还</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; widows:0;text-indent:20pt;">
        <span style="font-family:宋体; font-size:9pt">借款人应按借款借据记载的还款时间一次性偿还全部借款本金。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">还款方式</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.1</span>
        <span style="font-family:宋体; font-size:9pt">账户还款：借款人以第</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3.2</span>
        <span style="font-family:宋体; font-size:9pt">条约定的放款账户或其他账户作为还款账户。采用此种还款方式时：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）借款人应在还款日前将该期应还款项足额存入还款账户。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）还款账户被有权机关冻结、挂失时，借款人应及时向贷款人提供其他账户作为新的还款账户。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.2</span>
        <span style="font-family:宋体; font-size:9pt">现金还款：在还款日以现金、支票等直接缴至贷款人开户银行办理还款手续。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.3</span>
        <span style="font-family:宋体; font-size:9pt">通过电话银行、网上银行、手机银行等自动服务工具偿还贷款本息。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.4</span>
        <span style="font-family:宋体; font-size:9pt">当甲方款项给付不足以清偿全部债务时，乙方有权按照下列顺序优先抵充：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）甲方应承担的有关费用、乙方实现债权的有关费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）违约金、复利、罚息、利息；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）本金。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.5</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >如甲方的给付不足以清偿其对乙方所负的数笔相同种类的全部债务，乙方有权单方决定选择是否按下列顺序抵充：优先抵充已到期的债务；几项债务均到期的，优先抵充对乙方缺乏担保或者担保数额最少的债务；担保数额相同的，优先抵充债务负担较重的债务；负担相同的，按照债务到期的先后顺序抵充；到期时间相同的，按比例抵充。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0; text-indent:20pt;">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">提前还款</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
        <span style="font-family:宋体; font-size:9pt">借款人要求提前还款的，应在还款日前至少提前</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">10</span>
        <span style="font-family:宋体; font-size:9pt">个工作日向贷款人提出书面申请，经贷款人同意后，方可办理有关手续。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.2</span>
        <span style="font-family:宋体; font-size:9pt">提前还款应符合以下约定：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）提前还款日不能为利率调整日；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）提前还款时应结清已还本金的利息，利息按本合同约定计至提前还款日的前一日。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人经贷款人同意后提前归还部分本金且缩短剩余还款期数的，剩余的贷款本金仍适用原贷款期限对应的中国人民银行相应期限档次贷款的利率，利率浮动水平和调整仍按本合同第二条约定执行。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0; text-indent:20pt;">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款人的陈述与保证</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">7.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人是独立的法律主体，具备所有必要的权利能力和行为能力，能以自身名义履行本合同的义务并承担民事责任。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">7.2</span>
        <span style="font-family:宋体; font-size:9pt">签署和履行本合同是借款人真实的意思表示，不存在任何法律上的瑕疵。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">7.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人在签署和履行本合同过程中向贷款人提供的全部文件、资料及信息是真实、准确、完整和有效的，未向贷款人隐瞒可能影响其还款能力的任何信息。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">贷款人的权利与义务</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">8.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >贷款人有权按照本合同约定收回贷款本金、利息（包括复利、逾期及挪用罚息），收取借款人应付的费用，行使法律规定或本合同约定的其他权利。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">8.2</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >对借款人提供的财务、经营资料及信息保密，但法律另有规定或本合同另有约定的除外。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款人的权利与义务</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.1</span>
        <span style="font-family:宋体; font-size:9pt">借款人有权按合同约定取得并使用贷款。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.2</span>
        <span style="font-family:宋体; font-size:9pt">借款人应当按本合同约定的时间、金额和币种偿还本合同项下的贷款本金并支付利息。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.3</span>
        <span style="font-family:宋体; font-size:9pt">借款人不应将本合同项下贷款挪作他用。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.4</span>
        <span style="font-family:宋体; font-size:9pt">借款人应承担本合同项下所有费用支出，包括但不限于公证费、鉴定费、评估费、登记费、保险费等。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.5</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人应遵循贷款人与办理贷款业务相关的业务制度及操作惯例，包括但不限于配合贷款人对贷款使用情况和借款人收入情况的监督检查，及时提供贷款人要求的资料、信息，并保证所提供资料和信息是真实、完整、准确的。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.6</span>
        <span style="font-family:宋体; font-size:9pt">借款人应在下列事项发生或可能发生之日起五日内书面通知贷款人：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）对借款人还款能力有或可能有重大不利影响的诉讼、仲裁、行政措施、财产保全、强制执行或其他重大不利事件；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）借款人或其家庭成员的工作、收入发生重大变化；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）借款人姓名</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">/</span>
        <span style="font-family:宋体; font-size:9pt">名称、住所、联系方式、经营范围及方式发生变更；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
        <span style="font-family:宋体; font-size:9pt">）商号及其他投资人居所、出资额、出资方式等发生变更；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
        <span style="font-family:宋体; font-size:9pt">）借款人出售、出租、转移或以其他方式处分个人或商号资产的全部或大部分。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.7</span>
        <span style="font-family:宋体; font-size:9pt">借款人必须提供贷款人认可的有效担保方式，并与贷款人签订相关的担保合同。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.8</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >本合同项下的担保发生不利于贷款人债权的变化时，借款人应按贷款人的要求及时提供贷款人认可的其他担保。本款所称</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">“</span>
        <span style="font-family:宋体; font-size:9pt">变化</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">”</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >包括但不限于：担保人停产、歇业、解散、停业整顿、被撤销、营业执照被吊销、申请或被申请破产；担保人的经营或财务状况有重大变化；担保人的收入发生重大变化；担保人涉及重大诉讼或仲裁案件；担保物的价值减少或可能减少或被采取财产保全等强制措施；担保人在担保合同项下有违约行为；担保人与借款人发生争议；担保人要求解除担保合同；担保合同未生效或无效或被撤销；担保物权不成立或无效；或影响贷款人债权安全的其他事件等。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">违约</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">借款人有属于下列行为之一的，属于违约：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）借款人在第七条项下所作陈述与保证不真实；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）借款人违反本合同的约定；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）借款人未履行第九条项下所列任何一项义务的实际发生，贷款人认为将影响其债权的安全；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
        <span style="font-family:宋体; font-size:9pt">）借款人在履行与贷款人签订的其他合同时，有迟延履行等违约行为；</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
        <span style="font-family:宋体; font-size:9pt">）为他人债务提供担保可能影响其债务清偿能力时未提前书面通知贷款人，并征得贷款人同意。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十一条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">违约责任</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人出现第十条项下违约行为中的任何一项时，贷款人有权停止支付借款人尚未使用的贷款，单方面宣布合同项下已发放的贷款本金部分或全部提前到期，并要求借款人立即偿还所有到期及未到期的贷款本金并结清利息。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; widows:0;text-indent:20pt;">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人未按时足额偿还贷款本金、支付利息的，贷款人有权按合同约定处分质押权利、抵押物，追究保证人连带担保责任，并按照强制执行公证书赋予的强制执行效力向人民法院申请强制执行。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人未按时足额偿还贷款本金、支付利息或未按本合同约定用途使用贷款的，贷款人有权按逾期利率或挪用贷款的罚息利率计收利息，并对应付未付利息计收复利。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.4</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人未按时足额偿还贷款本金、支付利息的，应承担贷款人为实现债权而支付的催收费用、诉讼费（或仲裁费）、保全费、保全担保费、公告费、执行费、律师费、差旅费及其他所有费用。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.5</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >借款人死亡、丧失民事行为能力或经人民法院宣告失踪、死亡的，应由借款人的合法继承人或财产代管人在借款人财产范围内继续履行已借款项的还款义务，若借款人无继承人或财产代管人，或继承人或财产代管人拒绝或者怠于履行借款合同的，贷款人有权处分抵押物和质押权利，追究保证人的连带保证责任。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十二条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">争议解决</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt"
        >本合同在履行过程中发生争议，可以通过协商解决，协商不成，任一方均可向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十三条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他条款</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.1</span>
        <span style="font-family:宋体; font-size:9pt">借款人已通读上述条款，贷款人已应借款人的要求作了相应说明，借款人对所有内容无异议。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.2</span>
        <span style="font-family:宋体; font-size:9pt">本合同项下的借款借据以及双方确认的相关文件、资料均为合同不可分割的组成部分。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.3</span>
        <span style="font-family:宋体; font-size:9pt">本合同经借款人或授权代理人签字、贷款人负责人或授权代表签字并加盖单位印章后生效。</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.4</span>
        <span style="font-family:宋体; font-size:9pt">本合同正本一式</span>
        <input type="text" style="width: 30px;" v-model="info.a26">

        <span style="font-family:宋体; font-size:9pt">份。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十四条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他约定事项</span>
        <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.extra"></textarea>
      </p>

      <p style="font-size:9pt; line-height:200%; margin:0pt; text-align:justify">
        <span style="font-family:'Times New Roman'; font-size:9pt"></span>
      </p>
    </div>
    <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
    <div>
      <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
        <span style="font-family:宋体; font-size:9pt"></span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
        <span style="font-family:'Times New Roman'; font-size:9pt"></span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
        <span style="font-family:'Times New Roman'; font-size:9pt"></span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify"></p>

      <div class="clearfix">
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: left">
          <span style="font-family:宋体; font-size:9pt">甲方（签字）：</span>
          <input type="text" style="width: 150px;" v-model="info.a27">
        </div>
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right">
          <span style="font-family:宋体; font-size:9pt">乙方（公章）：</span>
          <span style="font-family:宋体; font-size:9pt"></span>
          <input type="text" style="width: 150px;" v-model="info.a28">
        </div>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">

      <div class="clearfix">
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right">
          <p style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify">
            <span style="font-family:宋体; font-size:9pt">负责人（签字）：</span>
            <input type="text" style="width: 150px;" v-model="info.a29">
          </p>
        </div>
      </div>
    </div>
    <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
    <div>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-align:right; widows:0">
        <span style="font-family:宋体; font-size:9pt">签约时间：</span>
        <input type="text" style="width: 50px;" v-model="info.a30">

        <span style="font-family:宋体; font-size:9pt">年</span>
        <input type="text" style="width: 30px;" v-model="info.a31">

        <span style="font-family:宋体; font-size:9pt">月</span>
        <input type="text" style="width: 30px;" v-model="info.a32">

        <span style="font-family:宋体; font-size:9pt">日</span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt">签约地点：</span>
        <input type="text" style="width: 50px;" v-model="info.contractCreateAddress">
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt">附件:</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt">致安徽省安振小额贷款有限公司：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">作为本合同附件，本人承诺如下：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt"
        >本人确认在本合同履行过程中或因履行该合同发生争议引起诉讼、仲裁时，以下地址作为贵公司、人民法院、仲裁机关等邮寄送达有关通知、相关法律文书的接收地址：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">送达地址：</span>
        <input type="text" style="width: 360px;" v-model="info.a33">
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">收件人：</span>
        <input type="text" style="width: 372px;" v-model="info.a34">
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">联系电话：</span>
        <input type="text" style="width: 360px;" v-model="info.a35">
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; widows:0">
        <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.agree"></textarea>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt"></span>
      </p>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">承诺人签章：</span>
      </p>
      <p style="font-size:9pt; line-height:200%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">签署时间：</span>
        <input type="text" style="width: 50px;" v-model="info.a36">

        <span style="font-family:宋体; font-size:9pt">年</span>
        <input type="text" style="width: 30px;" v-model="info.a37">

        <span style="font-family:宋体; font-size:9pt">月</span>
        <input type="text" style="width: 30px;" v-model="info.a38">

        <span style="font-family:宋体; font-size:9pt">日</span>
      </p>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
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
// 个人贷款合同
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
          a12: "临时周转",
          a13: "",
          a14: "",
          a15: "(2)",
          a16: "100",
          a17: "100",
          a18: "(2)",
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
          a35: "",
          a36: "",
          a37: "",
          a38: "",
          extra:
            "1. 本合同项下贷款在编号为XXXXXX的《综合授信合同》的授信范围内。2. 各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
          agree:
            "本人认可：如因本人提供的上述地址不准确、送达地址变更未及时告知贵公司、本人或者指定代收人拒绝签收等原因，导致通知或相关法律文书未能被本人实际接收的，文书退回之日视为送达之日。",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0015"
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
        a12: "临时周转",
        a13: "",
        a14: "",
        a15: "(2)",
        a16: "100",
        a17: "100",
        a18: "(2) ",
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
        a35: "",
        a36: "",
        a37: "",
        a38: "",
        extra:
          "1. 本合同项下贷款在编号为XXXXXX的《综合授信合同》的授信范围内。2. 各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
        agree:
          "本人认可：如因本人提供的上述地址不准确、送达地址变更未及时告知贵公司、本人或者指定代收人拒绝签收等原因，导致通知或相关法律文书未能被本人实际接收的，文书退回之日视为送达之日。",
        contractCreateAddress: "合肥市庐阳区",
        operateTip: "",
        auditTip: "",
        contractType: "0015"
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
            nv["contractType"] = "0015";
          }
          // console.log("赋值");
          this.info = nv;
        }
      },
      immediate: true,
      deep: true
    },
    "info.partyA": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.partyAtextarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.partyAinput.focus();
          });
        }
      }
    },
    "info.a4": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a4textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a4input.focus();
          });
        }
      }
    },
    "info.a5": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a5textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a5input.focus();
          });
        }
      }
    },
    "info.phoneNumber": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.phoneNumbertextarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.phoneNumberinput.focus();
          });
        }
      }
    },
    "info.a72": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a72textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a72input.focus();
          });
        }
      }
    },
    "info.a73": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a73textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a73input.focus();
          });
        }
      }
    },
    "info.a74": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a74textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a74input.focus();
          });
        }
      }
    },
    "info.a75": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a75textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a75input.focus();
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.contract-wrap {
  width: 630px;
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
  line-height: 150%;
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
