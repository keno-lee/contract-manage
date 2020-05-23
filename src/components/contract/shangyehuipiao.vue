<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div style="height: 3160px;">
        <div>
          <p
            style="font-size:10.5pt; line-height:140%; margin:0pt 0pt 0pt 10.5pt; orphans:0; text-align:center; widows:0"
          >
            <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">商业汇票贴现合同</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; widows:0;font-size:9pt;">
            <span style="font-family:宋体; font-size:9pt">合同编号：</span>
            <input
              style="width: 80px; text-align: left;"
              v-model="info.contractNumber"
              type="text"
            />
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">贴现申请人（甲方）：</span>
            <input
              ref="partyAinput"
              type="text"
              style="width:300px;"
              v-show="info.partyA.length < 20"
              v-model="info.partyA"
              @input="inputListener"
            />
            <textarea
              ref="partyAtextarea"
              style="text-decoration:underline; border:none;width: 300px;"
              v-show="info.partyA.length >= 20"
              cols="30"
              v-model="info.partyA"
              rows="1"
            ></textarea>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">法定代表人：</span>
            <input
              ref="personChargeinput"
              type="text"
              style="width:320px;"
              v-show="info.personCharge.length < 12"
              v-model="info.personCharge"
              @input="inputListener"
            />
            <textarea
              ref="personChargetextarea"
              style="text-decoration:underline; border:none;width: 320px;"
              v-show="info.personCharge.length >= 12"
              cols="30"
              v-model="info.personCharge"
              rows="1"
            ></textarea>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">证件种类：</span>
            <input type="text" style="width: 332px;" v-model="info.a2" />
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">证件号码：</span>
            <input
              ref="idcardinput"
              type="text"
              style="width:333px;"
              v-show="info.idcard.length < 20"
              v-model="info.idcard"
              @input="inputListener"
            />
            <textarea
              ref="idcardtextarea"
              style="text-decoration:underline; border:none;width: 333px;"
              v-show="info.idcard.length >= 20"
              cols="30"
              v-model="info.idcard"
              rows="1"
            ></textarea>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">地址：</span>
            <input type="text" style="width: 358px;" v-model="info.a4" />
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">联系电话：</span>
            <input
              ref="phoneNumberinput"
              type="text"
              style="width:334px;"
              v-show="info.phoneNumber.length < 20"
              v-model="info.phoneNumber"
              @input="inputListener"
            />
            <textarea
              ref="phoneNumbertextarea"
              style="text-decoration:underline; border:none;width: 334px;"
              v-show="info.phoneNumber.length >= 20"
              cols="30"
              v-model="info.phoneNumber"
              rows="1"
            ></textarea>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">贴现人（乙方）：</span>
            <span
              style="font-size:9pt; line-height:170%;  display: inline-block;width: 328px;text-align:center;border-bottom:1px solid #000"
            >安徽省安振小额贷款有限公司</span>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">法定代表人：</span>
            <!-- 徐静 -->
            <input type="text" style="width: 324px;" v-model="info.partyB" />
          </p>

          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">证件种类：</span>
            <span
              style="font-family:宋体; font-size:9pt; display: inline-block;width: 124px;text-align:center;border-bottom:1px solid #000"
            >营业执照</span>
            <span style="font-family:宋体; font-size:9pt">证件号码：</span>
            <span
              style="font-family:'Times New Roman'; font-size:9pt; display: inline-block;width: 144px;text-align:center;border-bottom:1px solid #000"
            >913401006941423604</span>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
            <span
              style="font-family:宋体; font-size:9pt; display: inline-block;width: 335px;text-align:center;border-bottom:1px solid #000"
            >合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
          </p>
          <p
            style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">联系电话：</span>
            <span style="font-family:宋体; font-size:9pt; text-decoration:underline"></span>
            <span
              style="font-family:'Times New Roman'; font-size:9pt; display: inline-block;width: 335px;text-align:center;border-bottom:1px solid #000"
            >0551-65667870</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
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
            >为了维护贵方的利益，在贵方签署本合同之前，请仔细阅读如下条款并确认有关事实，如果贵方对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方有权签署本合同，若依法需要取得他人同意的，贵方已经取得充分授权。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >贵方已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“____”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
          </p>
          <p style="margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0">
            <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
            <span
              style="font-family:宋体; font-size:9pt; font-weight:bold"
            >本合同签署生效后，贵方必须按约行使权利并主动承担义务。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="-aw-bookmark-end:OLE_LINK1"></span>
            <span style="-aw-bookmark-end:OLE_LINK2"></span>
            <span
              style="font-family:宋体; font-size:9pt"
            >经甲方申请，乙方同意与甲方进行商业汇票的贴现合作。根据有关法律法规和规章，甲乙双方经协商一致，订立本合同，以便共同遵守。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >贴现申请人与贴现人在本合同有效期内办理贴现业务的，应当适用本合同。但本合同的签署不得视为贴现申请人有向贴现人申请贴现的义务，也不得视为贴现人有接受贴现申请人的申请并为其贴现的义务。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条 定义</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >1.1 贴现是指甲方在票据到期日前将票据权利背书转让给乙方，由乙方扣除一定利息后，将实付金额支付给甲方的票据行为。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">1.2 贴现日即贴现起息日，指乙方将实付金额划至甲方的指定账户之日；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">贴现利息=汇票票面金额×计息天数×贴现年利率÷360天；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">实付贴现金额=汇票票面金额－贴现利息；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">贴现计息天数从贴现日算至止息日，算头不算尾。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >除非双方另有约定，汇票到期日为工作日的，以汇票到期日为止息日；汇票到期日为法定节假日的，以法定节假日后的第一个工作日为止息日。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条 合作期限</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">双方合作期限为自</span>
            <input style="width: 40px" v-model="info.a5" type="text" />
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input style="width: 20px" v-model="info.a6" type="text" />
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input style="width: 20px" v-model="info.a7" type="text" />
            <span style="font-family:宋体; font-size:9pt">日起至</span>
            <input style="width: 40px" v-model="info.a8" type="text" />
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input style="width: 20px" v-model="info.a9" type="text" />
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input style="width: 20px" v-model="info.a10" type="text" />
            <span style="font-family:宋体; font-size:9pt">日止，甲方应在合作期间提出贴现申请，所贴现票据的到期日可以晚于合作期限截止日。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条 贴现金额、利率及期限</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >在本合同合作期间，双方所做的每笔贴现业务的金额、利率及期限以具体办理该业务时乙方审批确认的金额、利率和期限为准。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >各张商业汇票项下的贴现日、贴现利率、实付贴现金额等以相应《商业汇票贴现申请书》的记载或电子商业汇票系统的记载为准。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >申请贴现的商业汇票的承兑人未使用的商票保贴额度小于贴现申请人申请贴现的票面金额的，贴现人有权拒绝为贴现申请人办理贴现业务。</span>
          </p>
<!--          <p-->
<!--            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"-->
<!--          >-->
<!--            <span-->
<!--              style="font-family:宋体; font-size:9pt"-->
<!--            >本协议项下贴现资金用途应当符合《商业汇票贴现申请书》。未经乙方书面同意，不得挪作他用，如甲方未按约定用途使用贴现资金，乙方有权对挪用部分每日按挪用金额的万分之</span>-->
<!--            <input style="width: 40px" v-model="info.a11" type="text" />-->
<!--            <span style="font-family:宋体; font-size:9pt">计收利息，并停止对其办理商业汇票贴现业务。</span>-->
<!--          </p>-->
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条 贴现业务的办理</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">4.1 贴现申请人需办理贴现时，应向贴现人提交下列文件：</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(1) 经贴现申请人签署并向贴现人出具的《商业汇票贴现申请书》；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(2) 经贴现申请人背书给贴现人的商业汇票原件或电子商业承兑汇票打印件；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >(3) 证明出票人或其直接前手之间具有真实交易关系的商品交易合同、增值税专用发票或普通发票、货运单据等文件的原件与复印件各一套；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(4) 营业执照副本复印件、法人代码证书、法定代表人资格证明文件、贷款证（卡）；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(5) 贴现申请人的法定代表人签署的贴现授权委托书和经办人身份证或其他法定身份证件；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(6) 贴现人要求的其他文件。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >4.2 贴现人有权自主决定是否接受贴现申请人的贴现申请办理贴现。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">4.3 在经贴现人审批同意后，贴现申请人将申请办理贴现的电子商业汇票交付乙方持有。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >4.4 贴现人同意贴现的，应在《商业汇票贴现申请书》记载的贴现日或电子商业汇票系统记载的贴现日将贴现款项划入贴现申请人指定的账户。但在贴现人支付贴现款项前存在下列情况的，贴现人有权拒绝支付贴现款项：</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(1) 贴现票据存在瑕疵或无效情形；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >(2) 贴现票据被利害关系人申请挂失、公示催告或被有权机关采取查封、冻结等保全或执行措施；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(3) 本合同无效、被撤销或终止；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(4) 贴现申请人违反其在本合同第五条所作陈述与保证；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(5) 本合同项下的担保(如果有)未有效设立或无效；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(6) 贴现票据的承兑人拒付已办理贴现的其他商业汇票；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">(7) 贴现申请人存在其他违反本合同其他约定或法律规定情形的。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条 贴现申请人的陈述与保证</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >为保证本合同的履行和保障贴现人的合法权益，贴现申请人在签署本合同时和本合同有效期内持续做出以下陈述和保证:</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.1
              贴现申请人依法设立并合法存续，具备所有必要的权利能力，能以自身名义履行本合同的义务并承担民事责任。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.2
              签署和履行本合同是贴现申请人真实的意思表示，并经过所有必须的同意、批准及授权，不存在任何法律上的瑕疵。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.3
              贴现申请人根据本合同申请贴现时向贴现人提供的商业汇票及其他所有文件均真实、合法、有效，不存在伪造、变造的情形；票据及所有文件上的签字均为有权签字人的真实签署；贴现申请人未向贴现人隐瞒可能影响其履约能力的任何信息。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.4
              贴现申请人保证其通过合法手续取得本合同项下所有商业汇票及相应的票据权利。对经背书的商业汇票，贴现申请人保证在该汇票项下与其直接前手间的转让是真实、有效的，如果贴现汇票系基于提供商品或服务取得，该商品或服务交易真实、有效且贴现申请人已经或将根据基础交易合同支付相应对价。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.5
              贴现申请人保证申请办理贴现的商业汇票不存在被利害关系人申请挂失、公示催告或被有权机关采取查封、冻结等保全或执行措施等限制情形的。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              5.6
              贴现申请人最近一年内未与申请贴现的商业汇票的出票人、承兑人或背书人发生纠纷，申请贴现时与商业汇票出票人、承兑人或背书人无债权债务纠纷。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条 甲方承诺并同意</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              6.1
              在办理本合同项下每笔电子商业汇票贴现时，无需逐笔签署合同；但甲方应向乙方发出申请电子商业汇票贴现的电子指令，该电子指令上甲方的电子签名作为申请办理电子商业汇票贴现的有效签章，甲方授予乙方扣收贴现利息及费用的权利和根据网上发出的申请信息填制相关业务凭证的权利。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              6.2
              对于电子商业汇票的贴现，甲方发出贴现申请的电子签章作为该电子商业汇票转让背书给乙方的有效签章；并且甲、乙双方均认同其与《中华人民共和国票据法》及《中华人民共和国担保法》所规定的票据背书转让具有同等法律效力。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              6.3
              本合同项下每笔电子商业汇票贴现的申请和办理以乙方在电子商业汇票系统中保存的业务记录、或乙方据此填制或打印的客户对账单等业务记录为准。乙方的业务记录是本合同的组成部分，与本合同具有同等法律效力。甲方对乙方业务记录的准确性、真实性及合法性予以确认，并且放弃任何异议。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">
              6.4
              本合同执行期内，乙方有权了解甲方的经营活动情况，甲方应予配合并定期向乙方报送真实的会计报表及生产经营计划。
            </span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条 追索</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">7.1 出现下列情形之一，贴现人有权向贴现申请人追索：</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >(1) 本合同项下任一商业汇票到期被拒绝付款的，贴现人有权就该被拒绝付款的商业汇票向贴现申请人追索；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >(2) 贴现汇票到期前，承兑人被宣告破产或被有权部门责令终止业务活动的，贴现人有权就该承兑人承兑的所有商业汇票向贴现申请人追索；</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >(3) 其他因为贴现申请人的原因致使贴现人未能取得贴现汇票项下款项或取得后被他人依法追索的。</span>
          </p>
<!--          <p-->
<!--            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"-->
<!--          >-->
<!--            <span-->
<!--              style="font-family:宋体; font-size:9pt"-->
<!--            >7.2 汇票到期后乙方未足额收回票款的，乙方有权将未收回部分转为甲方的逾期贷款，并自汇票到期日或提示付款日起计收罚息，罚息利率在该票据的贴现利率的基础上浮</span>-->
<!--            <input style="width: 40px" v-model="info.a12" type="text" />-->
<!--            <span style="font-family:宋体; font-size:9pt">%。</span>-->
<!--          </p>-->
<!--          <p-->
<!--            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"-->
<!--          >-->
<!--            <span style="font-family:宋体; font-size:9pt">7.3</span>-->
<!--            <span-->
<!--              style="font-family:宋体; font-size:9pt"-->
<!--            >乙方取得拒绝付款通知、破产文件等证明的，应及时书面通知甲方。甲方收到通知后三个工作日内将汇票票面金额、逾期罚息以及乙方行使追索权产生的全部费用支付至乙方指定账户。</span>-->
<!--          </p>-->
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">7.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同项下每份商业汇票的贴现均是独立的，任何一张商业汇票项下出现追索事由，贴现人均有权就该商业汇票向贴现申请人行使追索权。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条 争议解决</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同在履行过程中发生争议，可以通过协商解决，协商不成，任一方均可向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条 其他条款</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">9.1</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >贴现申请人已通读上述条款，贴现人已应贴现申请人的要求作了相应说明，贴现申请人对所有内容无异议。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">9.2</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同项下经双方签署的《商业汇票贴现申请书》和其他相关文件、资料以及电子商业汇票系统记录等均为本合同不可分割的组成部分。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">9.3</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >本合同经贴现申请人法定代表人(负责人)或授权代表签字(或盖章)并加盖公章、贴现人负责人或授权代表签字(或盖章)并加盖单位印章后生效。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">9.4</span>
            <span
              style="font-family:宋体; font-size:9pt"
            >《商业汇票贴现申请书》是对本合同的补充。除《商业汇票贴现申请书》另有约定外，申请人与贴现人之间的权利义务及有关事项仍按本合同的约定执行。</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">9.5</span>
            <span style="font-family:宋体; font-size:9pt">本合同正本一式</span>
            <input style="width: 40px" v-model="info.a13" type="text" />
            <span style="font-family:宋体; font-size:9pt">份。</span>
          </p>
          <p
            style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条</span>
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他约定事项：</span>
          </p>
          <textarea
            name
            id
            cols="30"
            rows="1"
            style="text-indent: 20pt; font-size: 9pt; font-weight:600;"
            v-model="info.extra"
          ></textarea>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">&#xa0;</span>
          </p>
        </div>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
        <div>
          <div class="clearfix">
            <div style="font-size:9pt; line-height:170%;  margin:0pt; float: left">
              <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
              <input type="text" style="width: 185px;" v-model="info.partyASign" />
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
                <span style="font-family:宋体; font-size:9pt">法定代表人（签字）：</span>
                <input type="text" style="width: 150px;" v-model="info.partyBWrite" />
              </p>
            </div>
          </div>
        </div>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
        <div>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:center; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">签约时间：</span>
            <input type="text" style="width: 40px;" v-model="info.contractCreateYear" />
            <span style="font-family:宋体; font-size:9pt">年</span>
            <input type="text" style="width: 20px;" v-model="info.contractCreateMonth" />
            <span style="font-family:宋体; font-size:9pt">月</span>
            <input type="text" style="width: 20px;" v-model="info.contractCreateDay" />
            <span style="font-family:宋体; font-size:9pt">日</span>
            <span style="font-family:宋体; font-size:9pt">签约地点：</span>
            <input type="text" style="width: 50px;" v-model="info.contractCreateAddress" />
          </p>
          <p
            style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
          >
            <span style="font-family:'Times New Roman'; font-size:9pt">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
          </p>
          <p
            style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; widows:0"
          >
            <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
          </p>
        </div>
      </div>
      <div>
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
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">作为本合同附件，本公司承诺如下：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >本公司确认在本合同履行过程中或因履行该合同发生争议引起诉讼、仲裁时，以下地址作为贵公司、人民法院、仲裁机关等邮寄送达有关通知、相关法律文书的接收地址：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">送达地址：</span>
          <input style="width: 300px" v-model="info.sendAddress" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">收件人：</span>
          <input type="text" style="width: 312px;" v-model="info.sendWho" />
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input type="text" style="width: 300px;" v-model="info.sendNumber" />
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt;  text-decoration:underline"
          >本公司认可：如因本公司提供的上述地址不准确、送达地址变更未及时告知贵公司、本公司或者指定代收人拒绝签收等原因，导致通知或相关法律文书未能被本公司实际接收的，文书退回之日视为送达之日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">承诺人签章：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">签署时间：</span>
          <input style="width: 40px" v-model="info.a14" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 20px" v-model="info.a15" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 20px" v-model="info.a16" type="text" />
          <span style="font-family:宋体; font-size:9pt">日</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">&#xa0;</span>
        </p>
      </div>
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
// 个人保证
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
        partyB: "徐静",
        phoneNumber: "",
        personCharge: "",
        a2: "",
        idcard: "",
        a4: "",
        a5: "",
        a6: "",
        a7: "",
        a8: "",
        a9: "",
        a10: "",
        // a11: "",
        // a12: "",
        a13: "",
        a14: "",
        a15: "",
        a16: "",
        extra:
          "本合同属于编号为xxxxxx的《商业承兑汇票贴现业务合作协议》的组成部分。在每笔票据到期前，乙方依据有关规定及时向电子商业汇票承兑人xxxxxx提示付款。如乙方实际收妥票款的时间超过了提示付款期限，乙方有权按照逾期贷款规定向甲方及商业汇票承兑人计收罚息。",
        partyASign: "",
        partyBSign: "",
        partyAWrite: "",
        partyBWrite: "",
        sendAddress: "",
        sendWho: "",
        sendNumber: "",
        contractCreateYear: "",
        contractCreateMonth: "",
        contractCreateDay: "",
        contractCreateAddress: "合肥市庐阳区",

        operateTip: "",
        auditTip: "",
        contractType: "0025"
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
        this.info = Object.assign(this.info, nv);
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
  font-size: 9pt;
}
textarea {
  width: 630px;
  resize: none;
  font-size: 9pt;
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
</style>
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
  width: 630px;
  resize: none;
  /* text-align: center; */
  overflow-y: hidden;
  border: none;
  text-decoration: underline;
  line-height: 24px;
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
</style>
