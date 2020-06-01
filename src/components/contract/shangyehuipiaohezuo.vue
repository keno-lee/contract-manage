<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div>
        <p
          style="font-size:10.5pt; line-height:170%; margin:0pt; orphans:0; text-align:center; widows:0"
        >
          <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">商业承兑汇票贴现业务合作协议</span>
        </p>
        <p style="font-size: 9pt; margin:0pt 63pt 0pt 0pt; orphans:0; text-align:justify; widows:0">
          <span style="font-family:宋体; font-size:9pt">合同编号：</span>
          <input style="width: 50px; text-align: left;" v-model="info.contractNumber" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">被授信人（甲方）：</span>
          <input
            ref="partyAinput"
            type="text"
            style="width:320px;"
            v-show="info.partyA.length < 20"
            v-model="info.partyA"
            @input="inputListener"
          />
          <textarea
            ref="partyAtextarea"
            style="text-decoration:underline; border:none;width: 320px;"
            v-show="info.partyA.length >= 20"
            cols="30"
            v-model="info.partyA"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">法定代表人：</span>
          <input
            ref="personChargeinput"
            type="text"
            style="width:328px;"
            v-show="info.personCharge.length < 12"
            v-model="info.personCharge"
            @input="inputListener"
          />
          <textarea
            ref="personChargetextarea"
            style="text-decoration:underline; border:none;width: 328px;"
            v-show="info.personCharge.length >= 12"
            cols="30"
            v-model="info.personCharge"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件种类：</span>
          <input type="text" style="width: 340px;" v-model="info.idType" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件号码：</span>
          <input
            ref="idcardinput"
            type="text"
            style="width:340px;"
            v-show="info.idcard.length < 20"
            v-model="info.idcard"
            @input="inputListener"
          />
          <textarea
            ref="idcardtextarea"
            style="text-decoration:underline; border:none;width: 340px;"
            v-show="info.idcard.length >= 20"
            cols="30"
            v-model="info.idcard"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span>
          <input type="text" style="width: 340px;" v-model="info.partyAAddress" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input
            ref="phoneNumberinput"
            type="text"
            style="width:340px;"
            v-show="info.phoneNumber.length < 20"
            v-model="info.phoneNumber"
            @input="inputListener"
          />
          <textarea
            ref="phoneNumbertextarea"
            style="text-decoration:underline; border:none;width: 340px;"
            v-show="info.phoneNumber.length >= 20"
            cols="30"
            v-model="info.phoneNumber"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:170%;  margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">授信人（乙方）：</span>
          <span
            style="font-size:9pt; line-height:170%;  display: inline-block;width: 332px;text-align:center;border-bottom:1px solid #000"
          >安徽省安振小额贷款有限公司</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%;  margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">法定代表人：</span>
          <input type="text" style="width: 330px;" v-model="info.partyB" />
        </p>
        <p
          style="font-size:9pt; line-height:170%;  margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件种类：</span>
          <span
            style="font-size:9pt; line-height:170%;display: inline-block;width: 130px;text-align:center;border-bottom:1px solid #000"
          >营业执照</span>
          <span style="font-family:宋体; font-size:9pt">证件号码：</span>
          <span
            style="font-size:9pt; line-height:170%;display: inline-block;width: 144px;text-align:center;border-bottom:1px solid #000"
          >913401006941423604</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%;  margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
          <span
            style="font-size:9pt; line-height:160%;  display: inline-block;width: 343px;text-align:center;border-bottom:1px solid #000"
          >合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%;  margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <span
            style="font-size:9pt; line-height:160%;  display: inline-block;width: 343px;text-align:center;border-bottom:1px solid #000"
          >0551-65667870</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:center; widows:0">
          <a name="OLE_LINK1"></a>
          <a name="OLE_LINK2">
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
          </a>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >为了维护贵方的利益，在贵方签署本协议之前，请仔细阅读如下条款并确认有关事实，如果贵方对本协议条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本协议：</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">贵方所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">贵方有权签署本协议，若依法需要取得他人同意的，贵方已经取得充分授权。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">贵方已经仔细阅读并同意接受本协议的所有条款，特别是加粗字体并带有“____”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
        </p>
        <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">本协议签署生效后，贵方必须按约行使权利并主动承担义务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="-aw-bookmark-end:OLE_LINK1"></span>
          <span style="-aw-bookmark-end:OLE_LINK2"></span>
          <span style="font-family:宋体; font-size:9pt">甲乙双方经协商一致，于</span>
          <input style="width: 40px" v-model="info.year" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.month" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.day" type="text" />
          <span style="font-family:宋体; font-size:9pt">日订立本合同，以共同遵照执行：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条 定义</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">“商业汇票”指纸质商业汇票或电子商业汇票(电子商业汇票、电子商业汇票系统的定义，依照电子商业汇票制度的规定)。商业汇票分为纸质银行承兑汇票、电子银行承兑汇票、纸质商业承兑汇票和/或电子商业承兑汇票。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >“电子商业汇票”是指出票人依托电子商业汇票系统，以数据电文形式制作的，委托付款人在指定日期无条件支付确定的金额给收款人或者持票人的票据。电子商业汇票分为电子银行承兑汇票和电子商业承兑汇票。本协议项下甲方为承兑人的商业汇票为电子商业汇票。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >“商业承兑汇票贴现业务”，指甲方承兑的商业汇票的持票人在我公司办理商业汇票贴现业务时，占用承兑人(甲方)的商票保贴授信额度，我公司在商业汇票到期日直接向甲方提示付款的业务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >“商票保贴授信额度”，指我公司按本协议约定，可能为甲方承兑的商业汇票的持票人办理贴现业务的保贴余额的最高额。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >“保贴余额”，指我公司根据甲方的商票保贴授信额度已办理贴现但甲方尚未付款的商业汇票的票面金额之和。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">“额度余额”，指商票保贴授信额度扣减保贴余额后的金额。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >“授信期限”，指持票人在商票保贴授信额度项下，向我公司申请办理贴现业务的期限，属于业务的发生期间。申请办理贴现业务的时间指我公司在商业汇票贴现申请文件上签章的日期。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条 商票保贴授信额度及授信期限</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.1</span>
          <span style="font-family:宋体; font-size:9pt">在本合同规定的条件下，商票保贴授信额度金额是：人民币(大写)</span>
          <input style="width: 100px" v-model="info.moneyBig" type="text" />
          <span style="font-family:宋体; font-size:9pt">。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.2</span>
          <span style="font-family:宋体; font-size:9pt">本合同项下授信额度的有效使用期间为</span>
          <input style="width: 20px" v-model="info.period" type="text" />
          <span style="font-family:宋体; font-size:9pt">年，自</span>
          <input style="width: 40px" v-model="info.startYear" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.startMonth" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.startDay" type="text" />
          <span style="font-family:宋体; font-size:9pt">日至</span>
          <input style="width: 40px" v-model="info.endYear" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.endMonth" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.endDay" type="text" />
          <span style="font-family:宋体; font-size:9pt">日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.3</span>
          <span style="font-family:宋体; font-size:9pt">持票人在我公司办理商业汇票贴现业务，按商业汇票票面金额占用甲方在乙方获得的商票保贴授信额度。甲方在本协议项下获得商票保贴授信额度，并不意味着我公司有义务就持票人提出申请的全部商业汇票办理贴现。对于持票人提出的商业汇票贴现申请，我公司有权在甲方商票保贴授信额度内予以审核并自行判断是否受理。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >本协议项下的商票保贴授信额度为循环额度，持票人可多次申请使用甲方的商票保贴授信额度办理商业汇票贴现业务，但保贴余额不能超过商票保贴授信额度金额。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2.5</span>
          <span style="font-family:宋体; font-size:9pt">乙方给予甲方的商票保贴授信额度仅用于持票人在我公司办理贴现业务，不得用于甲方自身持有的商业汇票在乙方办理贴现业务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条 业务办理条件</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">3.1</span>
          <span style="font-family:宋体; font-size:9pt">持票人如需在乙方办理贴现业务的，须符合以下条件：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(1)</span>
          <span style="font-family:宋体; font-size:9pt">持票人与我公司签署《汇票贴现合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(2)</span>
          <span style="font-family:宋体; font-size:9pt">申请贴现的商业汇票的票面金额不超过甲方商票保贴授信的额度余额；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(3)</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >最近一年内持票人未与商业汇票出票人、承兑人或背书人发生商业纠纷，当前与商业汇票出票人、承兑人或背书人无任何债权债务纠纷；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(4)</span>
          <span style="font-family:宋体; font-size:9pt">本协议项下的担保合同(如有)已生效且持续有效，担保合同为抵/质押合同的，合同项下的担保物权已设立并持续有效；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(5)</span>
          <span style="font-family:宋体; font-size:9pt">贴现合同约定的其他条件。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条 甲方的陈述与保证</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.1</span>
          <span style="font-family:宋体; font-size:9pt">甲方依法设立并合法存续，具备所有必要的权利能力，能以自身名义履行本协议的义务并承担民事责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >签署和履行本协议是甲方真实的意思表示，并经过所有必须的同意、批准及授权，不存在任何法律上的瑕疵。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方生产经营合法、合规，具有持续经营能力，有合法的付款来源，未涉及重大环境和社会风险，无重大不良信用记录。甲方的高级管理人员无不良记录。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方严格按照法律、法规及中国人民银行的相关规定承兑商业汇票，保证所承兑的商业汇票真实、合法、有效，确保出票人与收款人具有真实贸易背景。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4.5</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方在签署和履行本协议过程中向乙方提供的全部文件、公司的财务报表、经营情况、资料及信息是真实、准确、完整和有效的，未向乙方隐瞒可能影响其财务状况和还款能力的任何信息，甲方的财务状况自最新的财务报表报告日以来未发生重大不利变化。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条 甲方的义务</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.1</span>
          <span style="font-family:宋体; font-size:9pt">甲方应在乙方就贴现票据提示付款时按照《票据法》的规定及时足额付款。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.2</span>
          <span style="font-family:宋体; font-size:9pt">甲方应配合乙方核实商业汇票的真实、合法、有效性。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.3</span>
          <span style="font-family:宋体; font-size:9pt">甲方应自行解决与持票人发生的任何争议，该等争议不影响甲方履行本协议义务，甲方不应以其与供应商的货物纠纷、债权债务等原因，提出抵销要求和拒付抗辩。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方应配合乙方对甲方经营情况的监督检查，及时提供乙方因业务风险管理需要而要求的财务报表、资金使用记录和资料、关联方及关联方交易信息、环境和社会风险报告、其他资料及信息，并保证所提供文件、资料和信息是真实、完整、准确的。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.5</span>
          <span style="font-family:宋体; font-size:9pt;">甲方有下列任一事项时，应当至少提前</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold;">30</span>
          <span style="font-family:宋体; font-size:9pt;">天书面通知乙方，并且在提供乙方认可的债务清偿方案前不能采取行动：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(1)</span>
          <span style="font-family:宋体; font-size:9pt">出售、赠与、出租、出借、转移、抵押、质押或以其他方式处分全部或大部分资产或重要资产；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(2)</span>
          <span style="font-family:宋体; font-size:9pt">经营体制或产权组织形式发生重大变化，包括但不限于实施承包、租赁、联营、公司制改造、股份合作制改造、企业出售、合并(兼并)、合资(合作)、分立、设立子公司、产权转让、减资等。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.6</span>
          <span style="font-family:宋体; font-size:9pt">甲方应当在下列事项发生或可能发生之日起 7 日内书面通知乙方：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(1)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或其关联方修改章程，变更企业名称、法定代表人(负责人)、住所、通讯地址及营业范围等工商登记事项，或作出对财务、人事有重大影响的决定；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(2)</span>
          <span style="font-family:宋体; font-size:9pt">甲方、其关联方或担保人拟申请破产或可能或已被债权人申请破产；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(3)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或其关联方涉及重大诉讼、仲裁或行政措施，或者，主要资产或本协议项下担保物被采取了财产保全或其他强制措施，或者，主要资产或本协议项下担保物的安全完好状态受到或可能受到影响或者价值减少或有减少可能；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(4)</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方或其关联方为第三方提供担保，并因此而对其经济状况、财务状况或履行本协议项下义务的能力产生重大不利影响；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(5)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或其关联方签署对其经营和财务状况有重大影响的合同；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(6)</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方提前清偿未到期债务或优先清偿其他到期债务、为其他已有债务新增抵质押等任何形式的担保或作出任何有类似效果的安排或签署相关文件；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(7)</span>
          <span style="font-family:宋体; font-size:9pt">甲方、其关联方或担保人停产、歇业、解散、停业整顿、被撤销或营业执照被吊销；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(8)</span>
          <span style="font-family:宋体; font-size:9pt">甲方、其关联方、甲方或其关联方的主要投资者个人、甲方或其关联方的法定代表人(负责人)、董事或主要管理人员失踪、涉及违法违规或违反所适用的交易所规则或有异常变动；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(9)</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方或其关联方经营出现严重困难，或财务状况恶化，或发生对甲方或其关联方经营、财务状况或偿债能力或经济状况有负面影响的其他事件；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(10)</span>
          <span style="font-family:宋体; font-size:9pt">发生关联交易，且交易金额达到或超过最近经审计的净资产的10%;</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(11)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或其关联方因违反法律法规、监管规定、国家政策或行业标准等造成责任事故或被媒体曝光；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(12)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或其关联方发生安全或环保事故；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(13)</span>
          <span style="font-family:宋体; font-size:9pt">甲方的关联方与甲方之间的控制或被控制关系发生变化；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(14)</span>
          <span style="font-family:宋体; font-size:9pt">甲方或关联方发生重大股权变更；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(15)</span>
          <span style="font-family:宋体; font-size:9pt">甲方因违反法律法规和/或监管要求被或可能被有权机关调查、处罚或采取类似的其他措施；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(16)</span>
          <span style="font-family:宋体; font-size:9pt">发生影响甲方或其关联方偿债能力的其他重大不利事项。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5.7</span>
          <span style="font-family:宋体; font-size:9pt">本协议项下的担保发生不利于乙方债权的变化时，甲方应按乙方的要求及时提供乙方认可的其他担保。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本款所称“变化”包括但不限于：担保人合并、分立、停产、歇业、解散、停业整顿、被撤销、营业执照被吊销、申请或被申请破产；担保人的经营或财务状况有重大变化；担保人涉及重大诉讼、仲裁、行政措施，或主要资产被采取了财产保全或其他强制措施；担保物的安全完好状态受到或可能受到影响；担保物的价值减少或可能减少或被采取查封等财产保全等强制措施；担保人或其法定代表人(负责人)或主要管理人员涉及违法违规或违反所适用的交易所规则；担保人为个人的，担保人失踪、死亡(宣告死亡)；担保人在担保合同项下有违约行为；担保人与借款人发生争议；担保人要求解除担保合同；担保合同未生效或无效或被撤销；担保物权未设立或无效；或影响贷款人债权安全的其他事件等。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条 额度的调整</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6.1</span>
          <span style="font-family:宋体; font-size:9pt">下列任一事件发生时，均视为本协议的“额度调整事件”：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(1)</span>
          <span style="font-family:宋体; font-size:9pt">任一张甲方承兑的商业汇票到期，甲方未按时足额付款；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(2)</span>
          <span style="font-family:宋体; font-size:9pt">甲方所作陈述与保证不真实；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(3)</span>
          <span style="font-family:宋体; font-size:9pt">持票人商票贸易背景不真实；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(4)</span>
          <span style="font-family:宋体; font-size:9pt">甲方违反本协议的其他约定；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(5)</span>
          <span style="font-family:宋体; font-size:9pt">第5.6条所列任一事项实际发生，影响或可能影响乙方债权的安全；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(6)</span>
          <span style="font-family:宋体; font-size:9pt">因法律法规及监管政策发生变化致使乙方按本协议约定办理商票贴现业务构成或可能构成违法或违规的；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(7)</span>
          <span style="font-family:宋体; font-size:9pt">甲方履行与乙方订立的其他合同或与第三人订立的合同时，有违约行为或债务可能已经被宣布提前到期的。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">7.2</span>
          <span style="font-family:宋体; font-size:9pt">当出现任一“额度调整事件”时，乙方有权采取以下一项、多项或全部措施：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(1)</span>
          <span style="font-family:宋体; font-size:9pt">调低、暂停或取消本协议项下额度；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(2)</span>
          <span style="font-family:宋体; font-size:9pt">停止为持票人办理贴现业务；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">(3)</span>
          <span style="font-family:宋体; font-size:9pt">要求甲方变更、增加其他担保措施。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条 违约</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8.1</span>
          <span style="font-family:宋体; font-size:9pt">任一张甲方承兑的商业汇票到期，甲方未按票面金额付款的，甲方自商业汇票到期之日起，对未付金额按每日</span>
          <input style="width: 80px" v-model="info.damages" type="text" />
          <span style="font-family:宋体; font-size:9pt">向我公司支付违约金。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >任一张甲方承兑的商业汇票到期，甲方未按票面金额付款或未按本协议约定支付违约金的，甲方应当承担乙方为实现本协议项下债权而支付的催收费、诉讼费(或仲裁费)、保全费、公告费、执行费、律师费、差旅费及其他相关费用。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条 担保</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >为保证本协议项下的债权能得到清偿，将签订以下合同，为甲方履行本协议及与本协议相关的每笔具体业务合同或协议项下债务提供担保：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c1" type="checkbox" />
          <input style="width: 190px" v-model="info.c1Who" type="text" />
          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.c1Number" type="text" />
          <span style="font-family:宋体; font-size:9pt">《最高额保证合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c2" type="checkbox" />
          <input style="width: 190px" v-model="info.c2Who" type="text" />

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.c2Number" type="text" />

          <span style="font-family:宋体; font-size:9pt">《最高额保证合同（适用于个人保证）》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c3" type="checkbox" />
          <input style="width: 190px" v-model="info.c3Who" type="text" />

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.c3Number" type="text" />

          <span style="font-family:宋体; font-size:9pt">《最高额抵押合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c4" type="checkbox" />
          <input style="width: 190px" v-model="info.c4Who" type="text" />

          <span style="font-family:宋体; font-size:9pt">与乙方签订编号为</span>
          <input style="width: 190px" v-model="info.c4Number" type="text" />

          <span style="font-family:宋体; font-size:9pt">《最高额质押合同》；</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:10pt; widows:0"
        >
          <input v-model="info.c5" type="checkbox" />
          <span style="font-family:宋体; font-size:9pt">其他_甲方确认，前述担保事宜业已已依公司章程规定，征得公司董事会或股东会/股东大会的书面同意，并将加盖甲方公章的董事会或股东会/股东大会同意提供反担保的书面文件交予乙方。</span>
        </p>
<!--        <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.c5Extra"></textarea>-->

        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条 合同生效、变更和解除</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本协议经甲方法定代表人签字并加盖公章及乙方负责人签字并加盖公章后生效。本协议生效后，甲、乙双方任何一方不得擅自变更或提前解除本协议。需要变更或解除时，应经双方协商一致，并达成书面协议。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十一条 争议和解决</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同在履行过程中发生争议，可以通过协商解决，协商不成，向乙方住所地人民法院起诉解决。在诉讼期间，本协议不涉及争议部分的条款仍须履行。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十二条 附则</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">12.1</span>
          <span style="font-family:宋体; font-size:9pt">协议一式</span>
          <input style="width: 40px" v-model="info.copies" type="text" />
          <span style="font-family:宋体; font-size:9pt">份，每份具有同等法律效力。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">12.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >对甲方承兑的商业汇票，由持票人在我公司办理贴现业务的，持票人与我公司签订的贴现合同或协议均为本协议的组成部分，并构成一个整体。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">12.3</span>
          <span style="font-family:宋体; font-size:9pt">甲方确认:本协议履行过程中以及因履行协议发生争议引起诉讼、仲裁时，以下地址作为协议相对方、人民法院、仲裁机构等送达有关通知、相关法律文书的接收地址：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">送达地址：</span>
          <input style="width: 558px" v-model="info.sendAddress" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">收件人：</span>
          <input style="width: 570px" v-model="info.sendWho" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input style="width: 558px" v-model="info.sendNumber" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方认可：如因上述送达地址、收件人不准确，或送达地址、收件人变更但未及时告知合同相对人，或收件人拒绝签收等原因，导致通知或相关法律文书未能被甲方实际接收的，文书退回之日视为送达之日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">12.4</span>
          <span style="font-family:宋体; font-size:9pt">其他约定事项：</span>
          <!-- <textarea name id cols="30" rows="1" style="text-indent: 20pt" v-model="info.extra"></textarea> -->
        </p>
        <p style="margin:0pt;font-size:9pt;">
          <input
            ref="extrainput"
            type="text"
            style="width:100%;text-indent:20pt;text-align:left;font-weight: 600;"
            v-show="info.extra.length < 40"
            v-model="info.extra"
            @input="inputListener"
          />
          <textarea
            ref="extratextarea"
            style="text-decoration:underline; border:none;width: 100%;text-indent:20pt; "
            v-show="info.extra.length >= 40"
            cols="30"
            v-model="info.extra"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold"></span>
        </p>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
      <p style="font-size:14pt; line-height:170%;  margin:5pt 0pt; orphans:0;    widows:0">
        <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
      </p>

      <div>
        <div class="clearfix">
          <div style="font-size:9pt; line-height:170%;  margin:0pt; float: left">
            <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
            <input type="text" style="width: 186px;" v-model="info.partyASign" />
          </div>
          <div style="font-size:9pt; line-height:170%;  margin:0pt; float: right">
            <span style="font-family:宋体; font-size:9pt">乙方（公章）：</span>
            <input type="text" style="width: 150px;" v-model="info.partyBSign" />
          </div>
        </div>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
        <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0; widows:0">
          <span style="font-family:宋体; font-size:9pt">&nbsp;</span>
        </p>
        <div class="clearfix">
          <div style="font-size:9pt; line-height:170%;  margin:0pt; float: left">
            <p style="font-size:9pt; line-height:170%;  margin:0pt; text-align:justify">
              <span style="font-family:宋体; font-size:9pt">法定代表人（签字）：</span>
              <input type="text" style="width: 150px;" v-model="info.partyAWrite" />
            </p>
          </div>

          <div style="font-size:9pt; line-height:170%;  margin:0pt; float: right">
            <p style="font-size:9pt; line-height:170%;  margin:0pt; text-align:justify">
              <span style="font-family:宋体; font-size:9pt">负责人（签字）：</span>
              <input type="text" style="width: 150px;" v-model="info.partyBWrite" />
            </p>
          </div>
        </div>
      </div>

      <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />

      <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:right; widows:0">
        <span style="font-family:宋体; font-size:9pt">签约时间：</span>
        <input type="text" style="width: 40px;" v-model="info.contractCreateYear" />

        <span style="font-family:宋体; font-size:9pt">年</span>
        <input type="text" style="width: 20px;" v-model="info.contractCreateMonth" />

        <span style="font-family:宋体; font-size:9pt">月</span>
        <input type="text" style="width: 20px;" v-model="info.contractCreateDay" />

        <span style="font-family:宋体; font-size:9pt">日</span>
        <span style="font-family:宋体; font-size:9pt"></span>
        <span style="font-family:宋体; font-size:9pt">签约地点：</span>
        <input type="text" style="width: 50px;" v-model="info.contractCreateAddress" />
      </p>
    </div>

    <!-- 操作 -->
    <div class="operate-box" v-if="status === 'new' || status === 'draft'">
      <br />
      <div class="submit-btn btn" @click="submit">提交审核</div>
      <div class="save-btn btn" @click="save">保存</div>
    </div>

    <div class="operate-box" v-else-if="status === 'operate'">
      <div>操作：</div>
      <br />
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
        return {};
      }
    },
    status: ""
  },
  data() {
    return {
      info: {
        contractNumber: "",
        partyA: "",
        personCharge: "",
        partyAAddress: "",

        partyB: "徐静",
        phoneNumber: "",
        idType: "",
        idcard: "",
        year: "",
        month: "",
        day: "",
        moneyBig: "",
        period: "",
        startYear: "",
        startMonth: "",
        startDay: "",
        endYear: "",
        endMonth: "",
        endDay: "",
        damages: "万分之六",
        c1: "",
        c1Who: "",
        c1Number: "",
        c2: "",
        c2Who: "",
        c2Number: "",
        c3: "",
        c3Who: "",
        c3Number: "",
        c4: "",
        c4Who: "",
        c4Number: "",
        c5: "",
        // c5Extra:
        //   "甲方确认，前述担保事宜业已已依公司章程规定，征得公司董事会或股东会/股东大会的书面同意，并将加盖甲方公章的董事会或股东会/股东大会同意提供反担保的书面文件交予乙方",
        copies: "",
        sendAddress: "",
        sendWho: "",
        sendNumber: "",
        extra: "",
        contractCreateYear: "",
        contractCreateMonth: "",
        contractCreateDay: "",
        contractCreateAddress: "合肥市庐阳区",
        operateTip: "",
        auditTip: "",
        contractType: "0029"
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
        this.info = Object.assign(this.info, this.infoData);
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
    "info.personCharge": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.personChargetextarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.personChargeinput.focus();
          });
        }
      }
    },
    "info.idcard": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.idcardtextarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.idcardinput.focus();
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
    "info.extra": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 40) {
          this.$nextTick(() => {
            this.$refs.extratextarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.extrainput.focus();
          });
        }
      }
    }
  }
};
</script>
<style scoped>
.contract-wrap {
  width: 650px;
  margin: 0 auto;
  position: relative;
}

.first-part {
  height: 3150px;
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
