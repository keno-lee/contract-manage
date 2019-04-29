<template>
  <div class="contract-wrap">
    <div>
      <p
        style="font-size:10.5pt; line-height:140%; margin:0pt; orphans:0; text-align:center; widows:0"
      >
        <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">最高额抵押合同</span>
      </p>
      <p style="margin:0pt 63pt 0pt 0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt">合同编号：</span>
        <input style="width: 150px; text-align: left;" v-model="info.contractNumber" type="text">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押人（甲方）：</span>
        <input type="text" style="width: 350px;" v-model="info.partyA">
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
        <span style="font-family:宋体; font-size:9pt">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span>
        <input type="text" style="width: 360px;" v-model="info.a3">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">联系电话：</span>
        <input type="text" style="width: 360px;" v-model="info.phoneNumber">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押权人（乙方）：</span>
        <input type="text" style="width: 340px;" v-model="info.a17">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">负责人：</span>
        <input type="text" style="width: 372px;" v-model="info.a18">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
        <input type="text" style="width: 360px;" v-model="info.a19">
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt">联系电话：</span>
        <input type="text" style="width: 360px;" v-model="info.a20">
      </p>
      <p
        style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:center; text-indent:20pt; widows:0"
      >
        <a name="OLE_LINK1"></a>
        <a name="OLE_LINK2">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
        </a>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >为了维护您的利益，在您签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">您所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >您有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权；</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:bold"
        >您已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“___”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您必须按约行使权利并主动承担义务。</span>
        <span style="-aw-bookmark-end:OLE_LINK1"></span>
        <span style="-aw-bookmark-end:OLE_LINK2"></span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">鉴于乙方与</span>
        <input style="width: 50px" v-model="info.a4" type="text">
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">（下称“债务人”）签订编号为：</span>
        <input style="width: 50px" v-model="info.a5" type="text">
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">的《综合授信合同》。甲方愿意为债务人在主合同项下的一系列债务提供最高额抵押担保。根据有关法律法规和规章，甲乙双方经协商一致，订立本合同，以便共同遵守执行。前述《综合授信合同》以及债权人与债务人根据《综合授信合同》所签订的一系列借款合同及相关协议和其他法律文件为本合同的主合同。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押财产</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.1</span>
        <span style="font-family:宋体; font-size:9pt">甲方以本合同</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">“</span>
        <span style="font-family:宋体; font-size:9pt">抵押财产清单</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">”</span>
        <span style="font-family:宋体; font-size:9pt">所列之财产设定抵押。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.2</span>
        <span style="font-family:宋体; font-size:9pt">抵押财产换发新的所有权或其他权利证书（明），导致本合同</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">“</span>
        <span style="font-family:宋体; font-size:9pt">抵押财产清单</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">”</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >或者乙方收执的他项权利（抵押权）证书或抵押权证明文件与上述新的权利证书（明）或登记机关的登记簿相关记载不一致的，甲方不得以此为由拒绝承担担保责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >除非甲乙双方另有约定或法律另有规定，抵押财产上因附合、混合、加工、改建等原因而新增的物也作为乙方债权的抵押担保，甲方应根据乙方的要求办理必要的抵押登记等手续。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">1.4</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >如果抵押财产价值已经或者可能减少，影响乙方债权实现，甲方应按照乙方要求提供新的担保。在出现抵押财产价值减少或可能减少的情况下，甲方若不按照乙方要求提供新的担保，乙方可因此暂停对借款人提供贷款或采取其他保全债权的措施。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">担保的最高主债权限额及担保范围</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
        <span style="font-family:宋体; font-size:9pt">本最高额抵押项下担保的</span>
        <span style="font-family:宋体; font-size:9pt">债务本金余额</span>
        <span style="font-family:宋体; font-size:9pt">最高限额为人民币</span>
        <span style="font-family:宋体; font-size:9pt">（</span>
        <span style="font-family:宋体; font-size:9pt">大写金额</span>
        <span style="font-family:宋体; font-size:9pt">）</span>
        <input style="width: 50px" v-model="info.a6" type="text">
        <span style="font-family:宋体; font-size:9pt">。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">2.2</span>
        <span style="font-family:宋体; font-size:9pt">本最高额抵押的担保范围为主合同项下全部债务，包括但不限于全部本金、利息（包括复利和各项罚息）、违约金、赔偿金、债务人应向乙方支付的其他款项、乙方实现债权与担保权利而发生的费用（包括但不限于诉讼费、仲裁费、财产保全费、保全担保费、差旅费、执行费、评估费、拍卖费、公证费、送达费、公告费、律师费等）。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">2.3</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >主合同项下的贷款、垫款、利息、费用或乙方的任何其他债权的实际形成时间即使超出债权确定期间，仍然属于本最高额抵押的担保范围。主合同项下债务履行期限届满日不受债权确定期间届满日的限制。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押财产的登记</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">3.1</span>
        <span style="font-family:宋体; font-size:9pt">双方应于本合同签订后</span>
        <input style="width: 50px" v-model="info.a7" type="text">
        <span style="font-family:宋体; font-size:9pt">个工作日内到相应的登记部门办理抵押登记手续。甲方应于抵押登记完成之日将抵押财产的他项权利证书、抵押登记文件正本原件及其他相关权利证书交乙方持有。抵押登记证书交付于乙方持有后方可发放贷款。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">主合同变更</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">4.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方同意，乙方与债务人签订主合同或对主合同进行任何变更（包括但不限于延长债务履行期限或增加债权本金金额），均无需通知甲方，甲方仍应在本合同约定的最高额以及担保范围内承担担保责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">4.2</span>
        <span style="font-family:宋体; font-size:9pt">甲方的担保责任不因出现下列任一情况而减免：（1）乙方或债务人发生改制、合并、兼并、分立、增减资本、合资、联营、更名等情形；（2）乙方委托第三方履行其在主合同项下的义务。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">4.3</span>
        <span style="font-family:宋体; font-size:9pt">主合同项下债权全部或部分转移给任何第三人的，相应部分的抵押权随之转让，甲方应协助乙方及该第三人办理法律所要求的抵押变更登记手续，抵押变更登记手续是否办理完毕不影响抵押权的转让。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">4.4</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">主合同项下债权或债务全部或部分的转移行为未生效、无效、被撤销、被解除，甲方仍按照本合同对乙方承担担保责任。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押财产的占有与保管</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方应妥善地对抵押财产进行占有、保管和维修保养，合理使用抵押财产，维持抵押财产完好，按时缴纳与抵押财产相关的各项税费。乙方有权对抵押财产进行检查，并可要求甲方将抵押财产权利凭证的正本交乙方保管。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">5.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方委托或同意第三方占有、保管、使用抵押财产的，应告知该第三方乙方抵押权的存在，并要求其保持抵押财产完好、接受乙方对抵押财产的检查以及不妨碍乙方实现抵押权。甲方不因此免除前款中的义务，同时应对该第三方行为承担责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">5.3</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >抵押财产造成人身或财产损害的，应由甲方自行承担赔偿责任。如果乙方因此遭到索赔而承担了责任，或为甲方垫付了赔偿金，则乙方有权向甲方追偿。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押财产的保险</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >除非双方另有约定，甲方应根据有关法律及乙方指定的险种、保险期限、投保金额办理抵押财产的保险。保险人应当具备法定资质和良好信誉。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >保险单内容应当符合乙方的要求，不得附有损害乙方权益的限制性条件。保险单上应特别注明：乙方为保险赔偿金的优先受偿人（第一受益人）；变更保险单应经过乙方书面同意；一旦发生保险事故，保险人应将保险赔偿金直接划付至乙方指定的账户。抵押财产已保险的但保险单未注明上述内容的，应对保险单作出相应的批注或变更。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方应确保保险连续有效，不得以任何理由致使保险中断、撤销、失效，或者致使保险人减免赔偿责任，或者不经乙方同意变更保险单。如果保险期间届满时，甲方担保的债权未全部受偿的，甲方应当续保，对保险期间作相应延长。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.4</span>
        <span style="font-family:宋体; font-size:9pt">甲方应于本合同订立之日（抵押财产续保的，则为续保完成之日）起</span>
        <input style="width: 50px" v-model="info.a8" type="text">
        <span style="font-family:宋体; font-size:9pt">个工作日内将抵押财产的保险单正本交付乙方，并且在乙方预留有关保险索赔或保险权益转让所必需的文件。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">6.5</span>
        <span style="font-family:宋体; font-size:9pt">就抵押财产取得的保险赔偿金，乙方有权选择下列方法进行处理，甲方应协助办理有关手续：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）经乙方同意，用于修复抵押财产，以恢复抵押财产价值；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）清偿或提前清偿主合同项下债务本息及相关费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）为主合同项下债务提供质押担保；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
        <span style="font-family:宋体; font-size:9pt">）甲方提供符合乙方要求的新的担保后，由甲方自由处分。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">对甲方处分抵押财产的限制</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">7.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >未经乙方书面同意，甲方不得以任何方式处分抵押财产，包括但不限于放弃、出租（包括原租赁合同到期后续租）、赠予、转让、出资、重复担保、迁移、改为公益用途、与其他物添附或改建、分割。甲方未经乙方同意进行的上述行为损害乙方债权的，乙方有权要求甲方撤销、终止以上行为或要求甲方提供其他相应的担保。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">7.2</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >经乙方书面同意，甲方处分抵押财产而获得价款或其他款项应当存入乙方指定的账户。乙方有权选择下列方法进行处理</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">：</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">1</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）清偿或提前清偿主合同项下债务本息及相关费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">2</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）为主合同项下债务提供质押担保；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">3</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >）甲方提供符合乙方要求的新的担保后，由甲方自由处分。甲方应协助办理有关手续。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三方妨碍</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">8.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >如果抵押财产被国家征收、征用、拆除、没收、无偿收回，或者抵押财产被第三方查封、冻结、扣押、监管、留置、拍卖、强行占有、毁损或者进行其他处置，甲方应当立即通知乙方，并及时采取制止、排除或补救措施，防止损失扩大；若乙方提出要求，甲方应提供符合乙方要求的新担保。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">8.2</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >抵押财产发生前款情形后的剩余部分仍作为乙方债权的抵押担保。甲方因上述原因取得的赔偿金或补偿金，应存入乙方指定的账户。乙方有权选择下列方法进行处理</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">：</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">1</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）清偿或提前清偿主合同项下债务本息及相关费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">2</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）为主合同项下债务提供质押担保；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">3</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）甲方提供符合乙方要求的新的担保后，由甲方自由处分</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">；</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">4</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >）经乙方同意，用于修复抵押财产，以恢复抵押财产价值，甲方应协助办理有关手续。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押权实现</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >债务人不履行主合同项下到期债务或不履行被宣布提前到期的债务或违反主合同的其他约定，乙方有权处分抵押财产。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.2</span>
        <span style="font-family:宋体; font-size:9pt">本合同《抵押财产清单》记载的或双方另行约定的抵押财产价值（下称</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">“</span>
        <span style="font-family:宋体; font-size:9pt">暂定价值</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">”</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >），无论是否记载于登记机关的登记簿，均不表明抵押财产的最终价值，其最终价值为乙方处分抵押财产所得价款在扣除各项税费后的净额。若以抵押财产抵偿乙方债权的，上述暂定价值并不作为抵押财产抵偿乙方债权的依据，届时抵押财产的价值应由甲乙双方协商一致或依法公平评估确定。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >乙方处分抵押财产所得价款，在支付变卖或拍卖过程中的费用（包括但不限于保管费、评估费、拍卖费、过户费、税费、国有土地使用权出让金等）后，优先用于清偿主合同项下的债务，剩余价款退还甲方。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.4</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方与债务人为同一人的，乙方可以对甲方的抵押财产之外的财产申请强制执行，且不以放弃抵押权或必须先处分抵押财产为前提条件。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.5</span>
        <span style="font-family:宋体; font-size:9pt">甲方不得以任何方式（包括作为或不作为）妨碍乙方实现抵押权。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.6</span>
        <span style="font-family:宋体; font-size:9pt">无论乙方对主合同项下的债权是否拥有其他担保（包括但不限于保证、抵押、质押、定金、保函、备用信用证等担保方式），不论上述其他担保何时成立、是否有效、乙方是否向其他担保人提出权利主张，也不论是否有第三方同意承担主合同项下的全部或部分债务，也不论其他担保是否由债务人自己所提供，甲方在本合同项下的担保责任均不因此减免，乙方均可直接要求甲方依照本合同约定在其担保范围内承担担保责任，甲方将不提出任何异议。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.7</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >如果本合同约定的担保责任最高限额低于主合同项下实际发生的债权余额，在甲方承担担保责任后主合同项下的债权仍未获完全清偿，则甲方承诺，其向债务人或其他担保人主张（包括预先行使）代位权或追偿权，不应使乙方利益受到任何损害，并同意主合同项下债务的清偿优先于甲方代位权或追偿权的实现。具体而言，在乙方债权未被全部清偿前，（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）甲方同意不向债务人或其他担保人主张代位权或追偿权；如因任何原因，甲方实现了上述权利，则应将所获款项优先用于清偿乙方尚未获偿的债权；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）主合同项下的债务如有物的担保，甲方同意不以行使代位权为由或任何其他原因对该担保物或其处分后所得价款提出权利主张，上述担保物及所得价款应优先用于清偿乙方尚未获偿的债权；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）若债务人或其他担保人为甲方提供了反担保，则甲方基于上述反担保而获得的款项应优先用于清偿乙方尚未获偿的债权。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.8</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >如果主合同不成立、不生效、无效、部分无效或被撤销、被解除，且甲方与债务人不是同一人，则甲方在本合同约定的担保范围内对债务人因返还财产或赔偿损失而形成的债务与债务人承担连带责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">9.9</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方已充分认识到利率风险。如果乙方根据主合同的约定或者国家的利率政策变化而调整利率水平、计息或结息方式，导致债务人应偿还的利息、罚息、复利增加的，对增加部分，甲方也承担担保责任。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">违约责任</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">10.1</span>
        <span style="font-family:宋体; font-size:9pt">甲方违约责任：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）甲方违反本合同的任一约定或陈述与保证的事项存在任何虚假、错误、遗漏，乙方有权采取以下一项或多项措施：</span>
        <span style="font-family:宋体; font-size:9pt">①</span>
        <span style="font-family:宋体; font-size:9pt">要求甲方限期纠正违约行为；</span>
        <span style="font-family:宋体; font-size:9pt">②</span>
        <span style="font-family:宋体; font-size:9pt">要求甲方提供新的担保；</span>
        <span style="font-family:宋体; font-size:9pt">③</span>
        <span style="font-family:宋体; font-size:9pt">要求甲方赔偿损失；</span>
        <span style="font-family:宋体; font-size:9pt">④</span>
        <span style="font-family:宋体; font-size:9pt">处分抵押财产；</span>
        <span style="font-family:宋体; font-size:9pt">⑤</span>
        <span style="font-family:宋体; font-size:9pt">法律许可的其他救济措施。（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）乙方有权选择下列方法进行处理：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）清偿或提前清偿主合同项下债务本息及相关费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）为主合同项下债务提供质押担保；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）甲方提供符合乙方要求的新的担保后，由甲方自由处分。甲方应协助办理有关手续。（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >）如果因甲方原因导致抵押权未有效设立，或者导致抵押财产价值减少，或者导致乙方未及时或未充分实现抵押权，且甲方与债务人不是同一人，乙方有权要求甲方在本合同约定的担保范围内对担保的债务与债务人承担连带责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">10.2</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">乙方违约责任：如果乙方因过错遗失甲方交付的抵押财产权利证书；或者主合同项下债务清偿完毕后，乙方不及时返还抵押财产权利证书或在甲方提出申请后不依法协助办理抵押登记注销手续，甲方有权采取以下一项或多项措施：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">1</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">）要求乙方承担抵押财产权利证书的补办费用；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">2</span>
        <span
          style="font-family:宋体; font-size:9pt; font-weight:normal"
        >）要求乙方限期返还抵押财产的权利证书，或协助甲方注销抵押财产登记。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十一条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他条款</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.1</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >与本合同及本合同项下抵押财产有关的一切费用（包括但不限于占有、管理、处置、登记、公证、保险、运输、仓储、保管、估价、维修、保养、拍卖、过户等费用），均由甲方承担，双方另有约定的除外。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >对于甲方在本合同项下的全部应付款项，乙方有权从甲方的银行账户中划收人民币或其他币种的相应款项，且无须提前通知甲方。需要办理结售汇或外汇买卖手续的，甲方有义务协助乙方办理，汇率风险由甲方承担。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方同意乙方向中国人民银行及信贷征信主管部门批准建立的信用数据库或有关单位、部门查询甲方的信用状况，并同意乙方将甲方信息提供给中国人民银行及信贷征信主管部门批准建立的信用数据库。甲方并同意，乙方为业务需要也可以合理使用并披露甲方信息。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.4</span>
        <span style="font-family:宋体; font-size:9pt">对甲方发生违约情形，乙方有权向有关部门或单位予以通报，有权通过新闻媒体进行公告催收。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.5</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >除非有可靠、确定的相反证据，乙方有关本金、利息、费用和还款记录等内容的内部账务记载，乙方制作或保留的债务人办理提款、还款、付利息等业务过程中发生的单据、凭证及乙方催收贷款的记录、凭证，均构成有效证明主合同项下债权关系的确定证据。甲方不能仅因为上述记录、记载、单据、凭证由乙方单方制作或保留，而提出异议。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.6</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >乙方在本合同项下的权利并不影响和排除其根据法律、法规和其它合同所享有的任何权利。任何对违约或延误行为施以宽容、宽限、优惠或延缓等行为，均不能视为对本合同项下权利、权益的放弃或对任何违反本合同行为的许可或认可，也不影响、阻止和妨碍对该权利的继续行使或对其任何其它权利的行使，也不因此导致乙方对甲方承担义务和责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span
          style="font-family:宋体; font-size:9pt"
        >即使乙方不行使或延缓行使主合同项下的任何权利或未用尽主合同项下的任何救济，甲方在本合同项下的担保责任并不因</span>
        <span style="font-family:宋体; font-size:9pt">此减免，但是乙方若减免主合同项下债务，甲方在本合同项下的担保责任相应减免。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.7</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方如发生分立、解散、进入破产程序、被撤销、被注销工商登记、被吊销营业执照，抵押财产因自然因素或者因第三人行为而毁损、灭失、被侵害、脱离甲方控制，抵押财产权属发生争议或权利证书（明）被注销，均应立即通知乙方。如出现上述情形。甲方未履行或怠于履行通知义务的，乙方有权提前实现抵押权。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.8</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方知道债务人进入解散或破产程序后，应当立即通知乙方申报债权，同时自己应及时参加解散或破产程序，预先行使追偿权。甲方知道或者应当知道债务人进入解散或破产程序，但未能及时预先行使追偿权的，其损失由甲方自行承担。尽管有本条第</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">11.6</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >款第二项的约定，在债务人破产程序中，如果乙方与债务人达成和解协议，或者同意重整计划，本合同项下乙方的权利不因和解协议或重整计划而受到损害，甲方的担保责任不予以减免。甲方不得以和解协议、重整计划规定的条件对抗乙方的权利主张。乙方在和解协议、重整计划中对债务人作出让步而未能获得清偿的债权部分，仍有权要求甲方承担担保责任。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.9</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方发生解散或破产的，即使乙方在主合同项下债权尚未到期，乙方也有权参加甲方清算或破产程序，申报权利。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.10</span>
        <span style="font-family:宋体; font-size:9pt">甲方为自然人的，如果发生以下情况之一，乙方有权要求甲方增加其他担保、或者提前实现抵押权：（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
        <span style="font-family:宋体; font-size:9pt">）</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方被宣告死亡、宣告失踪、丧失民事行为能力、被采取强制措施限制人身自由或因重大健康状况、婚姻、工作、收入、财产等导致履约能力可能出现风险的；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
        <span style="font-family:宋体; font-size:9pt">）甲方涉重大的诉讼、仲裁、刑事及其他法律纠纷，或发生其他足以影响其偿债能力的；（</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
        <span style="font-family:宋体; font-size:9pt">）其他可能影响抵押权实现的情形。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">11.11</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">其他约定事项：</span>
        <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.extra"></textarea>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">11.12</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >本合同在履行过程中发生争议，可以通过协商解决，协商不成，任一方均可向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">11.13</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">本合同一式</span>
        <input style="width: 50px" v-model="info.a9" type="text">
        <span style="font-family:宋体; font-size:9pt; font-weight:normal">份，经甲方或授权代理人签字或加盖公章（单位）及乙方负责人签字或加盖公章后生效。</span>
      </p>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十二条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">抵押财产清单</span>
      </p>
      <table
        cellspacing="0"
        cellpadding="0"
        style="border-collapse:collapse; margin-left:0pt; width:0pt"
      >
        <tr style="height:36.85pt">
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:40pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">抵押财产名称</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:83.9pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">权属证书及其他有关证书编号</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:156.95pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">处</span>
              <span style="font-family:宋体; font-size:9pt"></span>
              <span style="font-family:宋体; font-size:9pt">所</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:25.7pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">面积</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:40.2pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">抵押财产的价值</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:69.4pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">已为其他债权设定抵押的金额</span>
            </p>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:23.75pt"
          >
            <p style="font-size:9pt; line-height:140%; margin:0pt">
              <span style="font-family:宋体; font-size:9pt">备注</span>
            </p>
          </td>
        </tr>
        <tr style="height:36.85pt">
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:31.35pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 8px"
              name
              id
              cols="2"
              rows="1"
              v-model="info.table1"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:83.9pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table2"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:156.95pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table3"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:25.7pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table4"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:40.2pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table5"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:69.4pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table6"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:23.75pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table7"
            ></textarea>
          </td>
        </tr>
        <tr style="height:36.85pt">
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:31.35pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table8"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:83.9pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table9"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:156.95pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table10"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:25.7pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table11"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:40.2pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table12"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:69.4pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table13"
            ></textarea>
          </td>
          <td
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; padding-left:5.4pt; padding-right:5.03pt; vertical-align:middle; width:40pt"
          >
            <textarea
              style="width: 100%; border:none; font-size: 11px"
              name
              id
              cols="30"
              rows="1"
              v-model="info.table14"
            ></textarea>
          </td>
        </tr>
      </table>
      <p style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十三条</span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
        <span style="font-family:宋体; font-size:9pt; font-weight:bold">甲方陈述与保证</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.1</span>
        <span style="font-family:宋体; font-size:9pt">甲方清楚地知悉乙方的经营范围、授权权限。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.2</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方已阅读本合同及主合同所有条款。应甲方要求，乙方已经就本合同及主合同做了相应的条款说明。甲方对本合同及主合同条款的含义及相应的法律后果已全部通晓并充分理解。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.3</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方具备担保人的合法资格，甲方在本合同项下的担保行为符合法律、行政法规、规章和甲方章程或内部组织文件的规定，且已获得公司内部有权机构及</span>
        <span style="font-family:'Times New Roman'; font-size:9pt">/</span>
        <span style="font-family:宋体; font-size:9pt">或国家有权机关的批准。因甲方无权签署本合同而产生的一切责任均由甲方承担，包括但不限于全额赔偿乙方因此遭受的损失。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.4</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >甲方确认自己对债务人的资产、债务、经营、信用、信誉等情况、是否具备签订主合同的主体资格和权限以及主合同的所有内容已经充分了解。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.5</span>
        <span
          style="font-family:宋体; font-size:9pt"
        >抵押财产不存在任何未书面告知乙方的瑕疵或负担，包括但不限于抵押财产为限制流通物、被查封、被扣押、被监管、被出租、被留置、抵押财产存在拖欠购置价款、维修费用、建设工程价款、国家税款、土地使用权出让金、损害赔偿金等情形或者抵押财产已为第三人设定担保。</span>
      </p>
      <p style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:20pt; widows:0">
        <span style="font-family:'Times New Roman'; font-size:9pt">13.6</span>
        <span style="font-family:宋体; font-size:9pt">甲方提供给乙方的一切与抵押财产有关的资料和信息均是真实合法、准确完整的。</span>
      </p>
      <p style="font-size:9pt; line-height:130%; margin:0pt; text-align:justify">
        <span style="font-family:'Times New Roman'; font-size:9pt"></span>
      </p>
    </div>
    <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
    <div>
      <div class="clearfix">
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: left">
          <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
          <input style="width: 150px" v-model="info.a10" type="text">
        </div>
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right">
          <span style="font-family:宋体; font-size:9pt">&nbsp;&nbsp;&nbsp;</span>
          <span style="font-family:宋体; font-size:9pt">乙方（公章）：</span>
          <span style="font-family:宋体; font-size:9pt"></span>
          <input style="width: 150px" v-model="info.a12" type="text">
        </div>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <div class="clearfix">
        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: left">
          <span style="font-family:宋体; font-size:9pt">法定代表人（签字）：</span>
          <input style="width: 150px" v-model="info.a11" type="text">
        </div>

        <div style="font-size:9pt; line-height:150%; margin:0pt; text-align:justify; float: right">
          <span style="font-family:宋体; font-size:9pt">负责人（签字）：</span>
          <input style="width: 150px" v-model="info.a13" type="text">
        </div>
      </div>
    </div>
    <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
    <div>
      <p style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0">
        <span style="font-family:宋体; font-size:9pt">签约时间：</span>
        <input style="width: 50px" v-model="info.a14" type="text">

        <span style="font-family:宋体; font-size:9pt">年</span>
        <input style="width: 50px" v-model="info.a15" type="text">

        <span style="font-family:宋体; font-size:9pt">月</span>
        <input style="width: 50px" v-model="info.a16" type="text">

        <span style="font-family:宋体; font-size:9pt">日</span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt">签约地点：</span>
        <input style="width: 50px" v-model="info.contractCreateAddress" type="text">
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
          a17: "安徽省安振小额贷款有限公司",
          a18: "潘伟",
          a19: "合肥市庐阳区濉溪路278号财富广场B座东楼17层",
          a20: "0551-65667870",
          extra:
            "各方均同意赋予本合同强制执行效力。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0013"
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
        a17: "安徽省安振小额贷款有限公司",
        a18: "潘伟",
        a19: "合肥市庐阳区濉溪路278号财富广场B座东楼17层",
        a20: "0551-65667870",
        extra:
          "各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
        contractCreateAddress: "合肥市庐阳区",
        operateTip: "",
        auditTip: "",
        contractType: "0013"
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
  line-height: 140%;
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
