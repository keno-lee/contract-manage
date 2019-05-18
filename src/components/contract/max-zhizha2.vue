<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div class="first-part">
        <div>
          <p
            style="font-size:10.5pt; line-height:140%; margin:0pt; orphans:0; text-align:center; widows:0"
          >
            <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">最高额质押合同</span>
          </p>
          <p
            style="font-size:9pt; margin:0pt 63pt 0pt 0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">合同编号：</span>
            <input style="width: 80px; text-align: left;" v-model="info.contractNumber" type="text">
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">出质人（甲方）：</span>
            <input style="width:351px;" v-model="info.partyA" type="text">
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">证件种类：</span>
            <input type="text" style="width: 360px;" v-model="info.a1">
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">证件号码：</span>
            <input type="text" style="width: 360px;" v-model="info.a2">
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">地址：</span>
            <input type="text" style="width: 384px;" v-model="info.a3">
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">联系电话：</span>
            <input type="text" style="width: 360px;" v-model="info.a4">
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">质权人（乙方）：</span>
            <span
              style="font-size:9pt; line-height:170%; display: inline-block;width: 352px;text-align:center;border-bottom:1px solid #000"
            >安徽省安振小额贷款有限公司</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">负责人：</span>
            <span
              style="font-size:9pt; line-height:170%; display: inline-block;width: 373px;text-align:center;border-bottom:1px solid #000"
            >潘 伟</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
            <span
              style="font-size:9pt; line-height:170%; display: inline-block;width: 361px;text-align:center;border-bottom:1px solid #000"
            >合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">联系电话：</span>
            <span
              style="font-size:9pt; line-height:170%; display: inline-block;width: 361px;text-align:center;border-bottom:1px solid #000"
            >0551-65667870</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:center; widows:0">
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >为了维护您/贵方的利益，在您/贵方签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您/贵方对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">您</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">/</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">您</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">/</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">您</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">/</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“___”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您</span>
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">/</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">贵方必须按约行使权利并主动承担义务。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">为了确保债权确定期间内债务人</span>
            <input type="text" style="width: 120px;" v-model="info.a5">
            <span style="font-family:宋体; font-size:9pt">（以下均称“债务人”）在本合同项下担保的最高本金额度为人民币（大写）</span>
            <input type="text" style="width: 50px;" v-model="info.a6">
            <span style="font-family:宋体; font-size:9pt">内与乙方签订的编号为</span>
            <input type="text" style="width: 80px;" v-model="info.a7">
            <span
              style="font-family:宋体; font-size:9pt"
            >的综合授信合同（包括本合同第三条第三款确定的需要并入本最高额质押担保债权范围的借款合同）（以下简称“主合同”）项下债务人的义务得以切实履行，甲方愿意提供不可撤销的质押担保。为明确双方的权利义务，遵照《中华人民共和国合同法》、《中华人民共和国担保法》《中华人民共和国物权法》及其他有关法律、法规、规章的规定，甲、乙双方经平等协商一致，订立本合同。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">甲方以下列第</span>
            <input type="text" style="width: 30px;font-weight:bold;" v-model="info.a8">
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >种（可多选）清单所列之财产或权利（以下统称“质押财产”）提供质押（详见附件）。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
            <span style="font-family:宋体; font-size:9pt">）质押财产清单（动产）；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
            <span style="font-family:宋体; font-size:9pt">）质押权利清单（股权或其他权利凭证）；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
            <span style="font-family:宋体; font-size:9pt">）质押应收帐款清单。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">本合同附件是本合同的有效组成部分。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同质押权的效力及于质物所生孳息（包括质物分离的天然孳息和甲方就质物可以收取的法定孳息）以及质物的从物、从权利、代位权、附和物、混合物、加工物等。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">甲方陈述与保证</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >依据中国法律具有担保人主体资格，可以对外提供质押担保，并对质押财产依法享有所有权或（和）处分权。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >有足够的能力承担担保责任，并不因任何指令、财力状况的改变、与任何单位签订的任何协议而减轻或免除其依据本合同所应承担的担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.3</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >完全了解主合同债务人的融资用途，为主合同债务人提供担保完全出于自愿，在本合同项下的全部意思表示真实。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.4</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >甲方清楚的知悉乙方的经营范围、授权权限，并确认对债务人的资产、债务、经营、信用、是否具备签订主合同的主体资格和权限等情况已经充分了解。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.5</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >在债权确定期间债务人与乙方形成债权债务关系所签订的一系列合同、协议以及其他法律性文件，如果没有在有关合同、协议及其他法律性文件中明确不是由本合同作质押担保的，均视为由本合同作质押担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.6</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >如债务人未按主合同约定履行偿付债务和相应费用的义务，乙方可要求甲方全面履行本合同约定的担保范围内的担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">2.7</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同签订之日，本合同项下的质押财产存在共有、争议、被查封、被扣押、已经设定抵（质）押权或被采取强制措施等的情况如下：</span>
            <input type="text" style="width: 537px;font-weight:bold;" v-model="info.a9">
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">最高限额及被质押担保的主债权种类</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">3.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >最高限额是指双方为明确甲方依据本合同承担质押担保责任的范围而约定的额度标准，甲方在最高限额内就在债权确定期间发生的该最高限额项下所有债权余额（包括本合同第六条所述全部债权的余额等）以本合同项下的质押财产承担质押担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">3.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同所担保的主债权为截至债权确定期间届满之日，在本合同约定的债权确定期间和最高限额内，乙方依据主合同实际发生的所有借款余额。主债权余额根据债权确定期间届满之日未到期和未清偿的主合同总额扣除债务人提供的保证金（若有）确定。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">3.3</span>
            <input type="checkbox" v-model="info.c1">
            <span style="font-family:宋体; font-size:9pt">最高额质押权设立前无已存在的债权，或已存在的债权不需要转入本最高额质押担保的债权范围。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:40pt; widows:0"
          >
            <input type="checkbox" v-model="info.c2">
            <span
              style="font-family:宋体; font-size:9pt"
            >最高额质押权设立前已经存在的下列债权，经双方同意，可以转入本合同约定的最高额质押担保的债权范围：</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
            <span style="font-family:宋体; font-size:9pt">）合同名称：</span>
            <input type="text" style="width: 100px;" v-model="info.a10">
            <span style="font-family:宋体; font-size:9pt">；合同编号：</span>
            <input type="text" style="width: 80px;" v-model="info.a11">
            <span style="font-family:宋体; font-size:9pt">；融资种类：</span>
            <input type="text" style="width: 50px;" v-model="info.a12">
            <span style="font-family:宋体; font-size:9pt">；币种：</span>
            <input type="text" style="width: 40px;" v-model="info.a13">
            <span style="font-family:宋体; font-size:9pt">；融资数额：</span>
            <input type="text" style="width: 50px;" v-model="info.a14">
            <span style="font-family:宋体; font-size:9pt">；利率：</span>
            <input type="text" style="width: 40px;" v-model="info.a15">
            <span style="font-family:宋体; font-size:9pt">；主债务履行期限：</span>
            <input type="text" style="width: 150px;" v-model="info.a16">
            <span style="font-family:宋体; font-size:9pt">。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
            <span style="font-family:宋体; font-size:9pt">）合同名称：</span>
            <input type="text" style="width: 100px;" v-model="info.a17">
            <span style="font-family:宋体; font-size:9pt">；合同编号：</span>
            <input type="text" style="width: 80px;" v-model="info.a18">
            <span style="font-family:宋体; font-size:9pt">；融资种类：</span>
            <input type="text" style="width: 50px;" v-model="info.a19">
            <span style="font-family:宋体; font-size:9pt">；币种：</span>
            <input type="text" style="width: 40px;" v-model="info.a20">
            <span style="font-family:宋体; font-size:9pt">；融资数额：</span>
            <input type="text" style="width: 50px;" v-model="info.a21">
            <span style="font-family:宋体; font-size:9pt">；利率：</span>
            <input type="text" style="width: 40px;" v-model="info.a22">
            <span style="font-family:宋体; font-size:9pt">；主债务履行期限：</span>
            <input type="text" style="width: 150px;" v-model="info.a23">
            <span style="font-family:宋体; font-size:9pt">。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">3.4</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >在最高额质押权设立后、在债权确定期间债务人与乙方形成债权债务关系所签订的一系列合同、协议以及其他法律性文件，如果没有在有关合同、协议及其他法律性文件中明确不是由本合同作质押担保的，均视为由本合同作质押担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">主合同借款人履行债务的期限</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">按照主合同项下借款借据约定的借款期限或债权债务凭证所载明的起止期限。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">债权确定期间</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">5.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >甲方在债权确定期间，在最高限额内，就乙方和债务人之间连续发生的不特定债权，向乙方提供质押担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">5.2</span>
            <span style="font-family:宋体; font-size:9pt">债权确定期间自</span>
            <input type="text" style="width: 40px;" v-model="info.a24">
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input type="text" style="width: 20px;" v-model="info.a25">
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input type="text" style="width: 20px;" v-model="info.a26">
            <span style="font-family:宋体; font-size:9pt">日至</span>
            <input type="text" style="width: 40px;" v-model="info.a27">
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input type="text" style="width: 20px;" v-model="info.a28">
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input type="text" style="width: 20px;" v-model="info.a29">
            <span
              style="font-family:宋体; font-size:9pt"
            >日（该期间届满之日简称“决算日”）。在该债权确定期间内，甲乙双方协议终止本合同的，终止之日为决算日；甲方依法书面通知乙方终止本合同的，甲方的书面通知到达乙方之日为决算日。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">质押担保范围</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本最高额质押合同担保的范围包括所有主合同项下的全部本金（包含根据主合同所发生的垫款）、利息、违约金、赔偿金、保管担保物费用、实现债权和担保权利的费用（包括为处分质押物所产生的公证、评估、鉴定、拍卖、诉讼或仲裁、送达、执行、保全费、保全担保费、律师代理费、差旅费等）和所有其他应付费用。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">6.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >因利息、违约金、赔偿金、实现债权和担保权利的费用（包括律师费、差旅费、公证、评估、鉴定、拍卖、诉讼或仲裁、送达、执行等费用）以及所有其他应付费用增加而导致实际超出最高限额的部分，甲方自愿以本合同约定的质押财产承担担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">质押财产的移交与登记</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">7.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >甲方应于本合同签订日将出质的动产或权利凭证移交乙方占有，同时向乙方支付包括保管、仓储、运输、维修质押财产等与质押财产有关的一切费用人民币（大写）：</span>
            <input type="text" style="width: 80px;" v-model="info.a30">
            <span
              style="font-family:宋体; font-size:9pt"
            >。第三方主体开具的相关证明文件（如单位定期存单质押时，定期存单开立银行出具的《单位定期存款开户证实书》等）应根据乙方要求一并交给乙方。乙方持有质押财产期间，非因乙方过错，质押财产造成环境污染或造成其他损害的，应由甲方独立承担责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">7.2</span>
            <span style="font-family:宋体; font-size:9pt">如乙方要求或依法需要办理出质登记或公证的，甲方应办妥相关的出质登记或公证手续。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">本合同项下权利质押的登记手续为第</span>
            <input type="text" style="width: 30px;" v-model="info.a31">
            <span style="font-family:宋体; font-size:9pt">种（可多选）：（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
            <span style="font-family:宋体; font-size:9pt">
              ）
              <input type="checkbox" v-model="info.c3">汇票
              <input type="checkbox" v-model="info.c4">支票
              <input type="checkbox" v-model="info.c5">本票
              <input type="checkbox" v-model="info.c6">债券
              <input type="checkbox" v-model="info.c7">存款单
              <input type="checkbox" v-model="info.c8">仓单
              <input type="checkbox" v-model="info.c9">提单质押，没有权利凭证的，甲方应于质押合同签订后十个工作日内向有关部门办理出质登记；（
            </span>
            <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
            <span style="font-family:宋体; font-size:9pt">
              ）
              <input type="checkbox" v-model="info.c10">基金份额
              <input type="checkbox" v-model="info.c11">证券登记结算机构登记的股权的出质的，甲方应于质押合同签订后十个工作日内向证券登记结算机构办理出质登记；（
            </span>
            <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
            <span style="font-family:宋体; font-size:9pt">）其他股权出质的，甲方应于质押合同签订后十个工作日内向工商行政登记部门办理出质登记；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
            <span style="font-family:宋体; font-size:9pt">
              ）
              <input type="checkbox" v-model="info.c12">注册商标专用权
            </span>
            <span style="font-family:'Wingdings 2'; font-size:9pt">
              <input type="checkbox" v-model="info.c13">专利权
              <input type="checkbox" v-model="info.c14">著作权等知识产权中的财产权出质的，甲方应于质押合同签订后十个工作日内向有关主管部门办理出质登记；（
            </span>
            <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
            <span style="font-family:宋体; font-size:9pt">）应收帐款出质的，甲方应于质押合同签订后十个工作日内向信贷征信机构办理出质登记。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">甲方逾期办理相关质押手续的，每逾期一天应向乙方支付</span>
            <input type="text" style="width: 60px;" v-model="info.a32">
            <span
              style="font-family:宋体; font-size:9pt"
            >（违约金数额或计算方式）的违约金，如乙方同意在质押手续办理完成之前向债务人发放贷款的，甲方除需继续支付违约金外，还视为甲方为主债权向乙方提供连带责任保证担保，直至登记手续办理完成。甲方应对乙方因此蒙受的损失承担赔偿责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">7.3</span>
            <span style="font-family:宋体; font-size:9pt">本合同项下质押权与被担保债务同时存在，被担保债务清偿完毕后，质押权才消灭。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第八条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >甲方不得隐瞒质押物存在共有、争议、被查封、被扣押或已经设定抵（质）押权、出租等情况（包括本合同签订当时及本合同签订后），如因此给乙方造成经济损失的，应由甲方向乙方全额赔偿。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第九条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同项下有关的评估、运输、鉴定、保险、登记、保管等事宜必须经乙方确认，费用均由甲方承担。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span style="font-family:宋体; font-size:9pt">甲方应于</span>
            <input type="text" style="width: 80px;" v-model="info.a33">
            <span style="font-family:宋体; font-size:9pt">（期限）内办理质押财产在乙方占有期间的足额财产保险，财产保险的第一受益人为乙方。并在</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >上述期限内将保险单证原件交由乙方保管。如主债权经债务人和甲乙双方同意展期的，甲方应办理延长投保期限的手续。甲方逾期办理保险、上交保单或办理延长投保期限手续的，每逾期一天，应向乙方支付</span>
            <input type="text" style="width: 60px;" v-model="info.a34">
            <span
              style="font-family:宋体; font-size:9pt"
            >（违约金金额或计算方式）违约金，且乙方有权按照本合同第十九条的约定处分质押财产并实现质押权。在乙方处分质押财产并实现质押权之前，因甲方未及时办理保险、上交保单的原因导致乙方无法获得保险金并将其视为质押财产的替代的，甲方对该部分差额承担连带保证责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十一条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >乙方占有质押财产期间负有妥善保管义务。非因乙方原因导致质押财产价值减少的，乙方不承担赔偿责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十二条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >质押期间（自甲方将质押财产移交乙方占有之日起计，下同），质押财产毁损、灭失、被征收或因非乙方原因导致质押财产价值减少的，所取得的保险金、赔偿金或者补偿金应视作质押财产的替代，存入乙方指定的帐户继续作为主债权的担保，也可以经债务人及甲、乙三方协商提前偿还债务。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十三条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >因不能归责于乙方的事由可能使质押财产或权利损毁或价值明显减少，足以危害乙方权利的，乙方有权要求甲方提供相应的担保，甲方应当在收到乙方通知之日起</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">30</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >日内向乙方提供与毁损或减少的价值相当的担保；甲方不提供担保的，乙方可以处分质押财产，所得价款用于提前清偿债务或转为保证金担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十四条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >质押期间，如因汇率变动导致乙方对债务人的融资本金余额超过本合同约定的最高限额，则本合同约定的最高限额相应增加超额部分。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十五条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >质押期间，未经乙方书面同意，甲方不得赠与、转移、出租、转让、再抵押（质押）或以其他任何方式处分本合同项下的质押物。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十六条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >质押期间，经乙方书面同意，甲方转让质押财产所得价款应优先清偿其所担保的债权或转为保证金担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >以汇票、支票、本票、债券、存款单、仓单、提单出质的，若汇票、支票、本票、债券、存款单、仓单、提单的兑现日期或者提货日期先于主债权到期的，乙方可以兑现或者提货，并将兑现的价款或提取的货物提前清偿债务或将相关款项转为保证金担保。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十七条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同生效后，甲方有义务办妥质押财产清单中列明的质押财产的质押登记手续。若因为甲方原因未能在相关规定期限内办妥质押登记手续的，甲方应对乙方因此而蒙受的损失承担赔偿责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第十八条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >在本合同有效期间，如果乙方与债务人协议变更主合同条款（包括变更还款方式、借款用途、还款计划、起息日、结息日、债务履行期限的起始日或截止日变更等），甲方同意仍由其对变更后的主合同项下的主债权、利息、违约金、赔偿金以及实现债权的费用（包括公证、评估、拍卖、诉讼或仲裁、送达、执行、律师代理等全部费用）承担担保责任，但如果该变更加重债务人的债务的，应征得甲方书面同意（但乙方依法将债权转让给第三人的和</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">/</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >或债务人与乙方协商一致同意根据借款合同约定将借款展期的除外）；未经甲方书面同意的，甲方仍在本合同规定的担保范围内承担责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >尽管有上述约定，但本合同有效期内，因国家法律、法规及银监会、人民银行等债权人主管机构有关规定调整或变化且适用于主合同，包括利率调整等，导致主合同变更的，甲方仍应当按本合同约定继续承担担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0;text-indent:20pt; "
          >
            <span style="font-family:宋体; font-size:9pt">第十九条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >发生下列情况之一，乙方有权处分质押财产或权利，实现质押权，保障乙方在主合同项下的所有合法权益：（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
            <span style="font-family:宋体; font-size:9pt">）债权确定期间届满且全部主债权余额履行期限均已届满；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
            <span style="font-family:宋体; font-size:9pt">）甲方的经营状况和</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">/</span>
            <span style="font-family:宋体; font-size:9pt">或财务状况恶化、或借贷高利贷尚未清偿、或涉及重大经济纠纷；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >）甲方被宣告破产、停业、歇业、被停业整顿、被暂扣或吊销许可证、被吊销营业执照、或被依法撤销、解散（甲方为自然人的，还包括甲方被宣告死亡、宣告失踪、丧失民事行为能力、被采取强制措施限制人身自由或因重大健康状况、婚姻、工作、收入、财产问题等导致履约能力可能出现风险的）；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >）甲方或甲方的法定代表人、实际控制人卷入或即将卷入重大的诉讼、仲裁、刑事及其他法律纠纷，或发生其他足以影响其偿债能力或缺乏偿债意愿的情形，且前述各种情形发生后乙方认为有必要将债权提前确定的；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
            <span style="font-family:宋体; font-size:9pt">）甲方违反本合同中关于当事人的权利义务的约定；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
            <span style="font-family:宋体; font-size:9pt">）质押财产被采取查封、扣押或其他强制措施或被依法监管；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
            <span style="font-family:宋体; font-size:9pt">）质押财产或出质权利价值严重下降的；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >）甲方违反本合同第二条、第八条、第九条、第十条、第十二条、第十三条、第十四条、第十五条、第十六条、第十七条的约定或发生其他严重违约行为或严重影响债权实现的其他情况，且乙方认为有必要提前将债权确定的；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
            <span style="font-family:宋体; font-size:9pt">）债务人未能清偿到期债务（含宣告提前到期）或履约能力出现风险。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >若甲方非债务人，且债务人亦提供了物的担保，甲方的担保责任和担保范围并不因此而减轻或缩小。乙方有权选择合适自己的债权实现方式（包括放弃其他担保物权），甲方同意仍就全部债务承担质押担保责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十一条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >主合同履行期限届满（包括宣告提前到期）债务人未能清偿债务，或发生本合同项下约定的实现质押权的情形，甲方在此授权乙方以法律允许的方式处分质押财产并对所得的价款优先受偿。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十二条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span style="font-family:宋体; font-size:9pt">乙方依法处分质押财产或权利所得价款，有权根据需要选择不同顺序对以下各项进行清偿：（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
            <span style="font-family:宋体; font-size:9pt">）支付行使担保物权所产生的保管、公证、评估、鉴定、拍卖等全部费用；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >）支付乙方为实现债权和担保权利所发生的诉讼或仲裁、送达、执行、律师代理、差旅费等全部费用；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
            <span style="font-family:宋体; font-size:9pt">）清偿债务人所欠乙方的所有债务的利息；（</span>
            <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >）清偿债务人所欠乙方的所有主合同项下的全部本金（含根据主合同所发生的垫款（若有））、手续费、违约金、赔偿金。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十三条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同履行期间，甲、乙任何一方均不得擅自变更或解除合同。需变更合同时，须经双方协商同意，达成书面协议。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十四条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同在履行过程中发生争议，可以通过协商解决，协商不成，任一方均可向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十五条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同经甲方法定代表人（负责人）或授权代理人签字并加盖公章及乙方负责人或授权代理人签字并加盖公章后生效（甲方为自然人的，由甲方签字）。本合同生效后，若因为甲方原因未能在合同生效后十个工作日内办妥质押登记手续的，甲方应对乙方因此所蒙受的损失承担赔偿责任。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">第二十六条</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span style="font-family:宋体; font-size:9pt">本合同一式</span>
            <input type="text" style="width: 30px;" v-model="info.a35">
            <span style="font-family:宋体; font-size:9pt">份，每份具有同等法律效力。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二十七条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他约定</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">27.1</span>
            <span style="font-family:宋体; font-size:9pt">未经乙方书面同意，甲方不得将本合同项下任何权利、义务转让予第三人。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">27.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >除另有约定外，双方指定本合同载明的通讯及联系地址为有效通讯地址，任何书面通知只要发往该地址，均视为有效。甲方承诺在通讯及联系地址发生变更时，以书面形式及时通知乙方。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">27.3</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >除非有可靠、确定的相反证据，乙方有关本金、利息、费用和还款记录等内容的内部帐务记载，乙方制作或保留的债务人办理提款、还款、支付利息等业务过程中发生的单据、凭证及乙方催收贷款的记录、凭证，均构成有效证明本合同项下债权债务关系的确定证据。甲方不能仅因为上述记录、记载、单据、凭证由乙方单方制作或保留，而提出异议。</span>
          </p>
          <p
            style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二十八条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他约定事项：</span>
            <input
              ref="extrainput"
              type="text"
              style="width:470px;"
              v-show="info.extra.length < 20"
              v-model="info.extra"
              @input="inputListener"
            >
            <textarea
              ref="extratextarea"
              style="text-indent: 20pt"
              v-show="info.extra.length >= 20"
              cols="30"
              v-model="info.extra"
              rows="1"
            ></textarea>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt; text-decoration:none"></span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >甲方已阅读本合同及主合同的所有条款。应甲方要求，乙方已经就本合同及主合同做了相应的条款说明。甲方对本合同及所有合同条款的含义相应的法律后果已经全部知晓并充分了解。</span>
          </p>
          <p style="font-size:9pt; line-height:130%; margin:0pt; text-align:justify">
            <span style="color:#ff0000; font-family:'Times New Roman'; font-size:9pt"></span>
          </p>
        </div>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
        <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0;    widows:0">
          <span style="font-family:宋体; font-size:14pt">&nbsp;</span>
        </p>
        <div>
          <div class="clearfix">
            <div style="font-size:9pt; line-height:170%; margin:0pt;  float: left">
              <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
              <input style="width:120px;" v-model="info.a36" type="text">
            </div>
            <div style="font-size:9pt; line-height:170%; margin:0pt;  float: right">
              <span style="font-family:宋体; font-size:9pt">乙方（公章）：</span>
              <input style="width:120px;" v-model="info.a37" type="text">
            </div>
          </div>
          <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
          <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0;    widows:0">
            <span style="font-family:宋体; font-size:14pt">&nbsp;</span>
          </p>
          <div class="clearfix">
            <div style="font-size:9pt; line-height:170%; margin:0pt;  float: left">
              <span style="font-family:宋体; font-size:9pt">法定代表人（签字）：</span>
              <input style="width:120px;" v-model="info.a39" type="text">
            </div>
            <div style="font-size:9pt; line-height:170%; margin:0pt;  float: right">
              <span style="font-family:宋体; font-size:9pt">负责人（签字）：</span>
              <input style="width:120px;" v-model="info.a38" type="text">
            </div>
          </div>
        </div>

        <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
        <div>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">签约时间：</span>
            <input style="width:40px;" v-model="info.a40" type="text">
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input style="width:20px;" v-model="info.a41" type="text">
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input style="width:20px;" v-model="info.a42" type="text">
            <span style="font-family:宋体; font-size:9pt">日</span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span style="font-family:宋体; font-size:9pt"></span>
            <span style="font-family:宋体; font-size:9pt">签约地点：</span>
            <input style="width: 50px" v-model="info.contractCreateAddress" type="text">
          </p>
          <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
        </div>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <div>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt"></span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">附件:</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">致安徽省安振小额贷款有限公司：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">作为本合同附件，本人（本公司）承诺如下：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >一、本人（本公司）确认在本合同履行过程中或因履行该合同发生争议引起诉讼、仲裁时，以下地址作为贵公司、人民法院、仲裁机关等邮寄送达有关通知、相关法律文书的接收地址：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">送达地址：</span>
          <input type="text" style="width: 560px;" v-model="info.a43">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">收件人：</span>
          <input type="text" style="width: 572px;" v-model="info.a44">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input type="text" style="width: 560px;" v-model="info.a45">
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本人（本公司）认可：如因本人（本公司）提供的上述地址不准确、送达地址变更未及时告知贵公司、本人（本公司）或者指定代收人拒绝签收等原因，导致通知或相关法律文书未能被本人实际接收的，文书退回之日视为送达之日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >二、本人（本公司）是保证人或抵押人或出质人：担保范围除合同约定之外，还包括贵司因诉讼保全或诉前保全向担保公司交纳的保全担保费用。</span>
        </p>
        <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0; widows:0">
          <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">承诺人签章：</span>
        </p>

        <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0; widows:0">
          <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
        </p>

        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt"></span>
          <span style="font-family:宋体; font-size:9pt">签署时间：</span>
          <input type="text" style="width: 40px;" v-model="info.a46">
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input type="text" style="width: 20px;" v-model="info.a47">
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input type="text" style="width: 20px;" v-model="info.a48">
          <span style="font-family:宋体; font-size:9pt">日</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; widows:0">
          <span style="font-family:'Times New Roman'; font-size:10.5pt"></span>
        </p>
      </div>
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
          a35: "",
          a36: "",
          a37: "",
          a38: "",
          a39: "",
          a40: "",
          a41: "",
          a42: "",
          a43: "",
          a44: "",
          a45: "",
          a46: "",
          a47: "",
          a48: "",
          c1: "",
          c2: "",
          c3: "",
          c4: "",
          c5: "",
          c6: "",
          c7: "",
          c8: "",
          c9: "",
          c10: "",
          c11: "",
          c12: "",
          c13: "",
          c14: "",
          extra: "",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0024"
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
        a35: "",
        a36: "",
        a37: "",
        a38: "",
        a39: "",
        a40: "",
        a41: "",
        a42: "",
        a43: "",
        a44: "",
        a45: "",
        a46: "",
        a47: "",
        a48: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c7: "",
        c8: "",
        c9: "",
        c10: "",
        c11: "",
        c12: "",
        c13: "",
        c14: "",
        extra: "",
        contractCreateAddress: "合肥市庐阳区",
        operateTip: "",
        auditTip: "",
        contractType: "0024"
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
