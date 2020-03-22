<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div>
        <p
          style="font-size:10.5pt; line-height:140%; margin:0pt; orphans:0; text-align:center; widows:0"
        >
          <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">最高额保证合同（适用于个人）</span>
        </p>
        <p style="margin:0pt 63pt 0pt 0pt; orphans:0; text-align:justify; widows:0">
          <span style="font-family:宋体; font-size:9pt">合同编号：</span>
          <input style="width: 80px; text-align: left;" v-model="info.contractNumber" type="text" />
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">&#xa0;</span>
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">保证人（甲方）：</span>
          <input
            ref="partyAinput"
            type="text"
            style="width:400px;"
            v-show="info.partyA.length < 20"
            v-model="info.partyA"
            @input="inputListener"
          />
          <textarea
            ref="partyAtextarea"
            style="text-decoration:underline; border:none;width: 400px;"
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
            style="width:370px;"
            v-show="info.personCharge.length < 12"
            v-model="info.personCharge"
            @input="inputListener"
          />
          <textarea
            ref="personChargetextarea"
            style="text-decoration:underline; border:none;width: 370px;"
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
          <input type="text" style="width: 360px;" v-model="info.a2" />
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">证件号码：</span>
          <input
            ref="idcardinput"
            type="text"
            style="width:458px;"
            v-show="info.idcard.length < 20"
            v-model="info.idcard"
            @input="inputListener"
          />
          <textarea
            ref="idcardtextarea"
            style="text-decoration:underline; border:none;width: 458px;"
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
          <input type="text" style="width: 384px;" v-model="info.a4" />
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <input
            ref="phoneNumberinput"
            type="text"
            style="width:456px;"
            v-show="info.phoneNumber.length < 20"
            v-model="info.phoneNumber"
            @input="inputListener"
          />
          <textarea
            ref="phoneNumbertextarea"
            style="text-decoration:underline; border:none;width: 456px;"
            v-show="info.phoneNumber.length >= 20"
            cols="30"
            v-model="info.phoneNumber"
            rows="1"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">债权人（乙方）：</span>
          <span
            style="font-size:9pt; line-height:170%;  display: inline-block;width: 352px;text-align:center;border-bottom:1px solid #000"
          >安徽省安振小额贷款有限公司</span>
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">法定代表人：</span>
          <input type="text" style="width: 373px;" v-model="info.partyB" />
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">通讯地址：</span>
          <span
            style="font-family:宋体; font-size:9pt; text-decoration:underline"
          >合肥市庐阳区濉溪路278号财富广场B座东楼17层</span>
        </p>
        <p
          style="font-size:9pt; line-height:125%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">联系电话：</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; text-decoration:underline"
          >0551-65667870</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:center; text-indent:21pt; widows:0"
        >
          <a name="_Hlk6927886">
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
          </a>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >为了维护您的利益，在您签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">您所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您必须按约行使权利并主动承担义务。</span>
          <span style="-aw-bookmark-end:_Hlk6927886"></span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >为保障债权人债权的实现，保证人自愿为债权人与债务人之间形成的相关债权提供最高额保证。为此，依据《合同法》、《担保法》</span>
          <span style="font-family:宋体; font-size:9pt">、《</span>
          <span style="font-family:宋体; font-size:9pt">票据法</span>
          <span style="font-family:宋体; font-size:9pt">》</span>
          <span style="font-family:宋体; font-size:9pt">及其他有关法律、法规的规定，保证人和债权人经平等协商，订立本合同内容如下：</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条 最高额保证定义与被保证主债权</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >最高额保证，是指债权人与保证人之间就债务人在一定期间内连续发生的多笔债务，确定一个最高额度，由保证人在此最高额度内对债务人履行债务向债权人提供保证。该最高额度是指债务人在债权人处的各项债务</span>
          <span style="font-family:宋体; font-size:9pt">本金</span>
          <span style="font-family:宋体; font-size:9pt">的总余额。</span>
          <span style="font-family:宋体; font-size:9pt">本合同项下担保范围</span>
          <span style="font-family:宋体; font-size:9pt">包括但不限于全部本金、利息（包括复利和</span>
          <span style="font-family:宋体; font-size:9pt">各项</span>
          <span style="font-family:宋体; font-size:9pt">罚息）、违约金、赔偿金、债务人应向乙方支付的其他款项（包括但不限于乙方垫付的有关手续费</span>
          <span style="font-family:宋体; font-size:9pt">、</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >信用证项下受益人拒绝承担的有关银行费用等）、乙方实现债权与担保权利而发生的费用（包括但不限于诉讼费、仲裁费、财产保全费、差旅费、执行费、评估费、拍卖费、公证费、送达费、保全担保费、公告费、律师费等）。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span style="font-family:宋体; font-size:9pt">被保证的主债权是指自</span>
          <input style="width: 40px" v-model="info.a5" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 40px" v-model="info.a6" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 40px" v-model="info.a7" type="text" />
          <span style="font-family:宋体; font-size:9pt">日起至</span>
          <input style="width: 40px" v-model="info.a8" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 40px" v-model="info.a9" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 40px" v-model="info.a10" type="text" />
          <span style="font-family:宋体; font-size:9pt">日期间因本合同乙方根据与债务人（承兑人？）</span>
          <input style="width: 60px" v-model="info.a11" type="text" />
          <span style="font-family:'Times New Roman'; font-size:9pt; text-decoration:underline"></span>
          <span style="font-family:宋体; font-size:9pt">之间的《商业承兑汇票贴现业务合作协议》向债务人（承兑人？）</span>
          <input style="width: 60px" v-model="info.a12" type="text" />
          <span style="font-family:宋体; font-size:9pt">授信（合同编号为：</span>
          <input style="width: 60px" v-model="info.a13" type="text" />
          <span style="font-family:宋体; font-size:9pt">）而形成的一系列债权，其最高本金</span>
          <span style="font-family:宋体; font-size:9pt">余额额</span>
          <span style="font-family:宋体; font-size:9pt">度为人民币</span>
          <input style="width: 60px" v-model="info.a14" type="text" />
          <span style="font-family:宋体; font-size:9pt">万元整。在上述约定期限和最高额度内，</span>
          <span style="font-family:宋体; font-size:9pt">前述</span>
          <span style="font-family:宋体; font-size:9pt">债权人与债务人</span>
          <span style="font-family:宋体; font-size:9pt">签订的《商业承兑汇票贴现业务合作协议》以及</span>
          <span style="font-family:宋体; font-size:9pt">根据</span>
          <span style="font-family:宋体; font-size:9pt">该《商业承兑汇票贴现业务合作协议》</span>
          <span style="font-family:宋体; font-size:9pt">所签订的一系列</span>
          <span style="font-family:宋体; font-size:9pt">贴现</span>
          <span style="font-family:宋体; font-size:9pt">合同及相关协议和其他法律文件为本合同的主合同。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >主合同项下的贷款、垫款、利息、费用或乙方的任何其他债权的实际形成时间即使超出债权确定期间，仍然属于本最高额保证的担保范围。主合同项下债务履行期限届满日不受债权确定期间届满日的限制。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">1.4</span>
          <span style="font-family:'Times New Roman'; font-size:9pt"></span>
          <span style="font-family:宋体; font-size:9pt">为避免歧义，本条</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1.2</span>
          <span style="font-family:宋体; font-size:9pt">中的最高本金余额额度是指债务人在乙方处办理主合同项下约定</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >的贷款业务所形成的债权本金额度，该本金所产生的利息、违约金、损害赔偿金、乙方实现债权及担保权的费用等仍属甲方所担保之范围，而不论该本金余额与利息（包括各项罚息、复利）、违约金、损害赔偿金、乙方实现债权及担保权的费用等之和是否超过甲方所</span>
          <span style="font-family:宋体; font-size:9pt">担保的本金最高限额，也不论除本金之外的其他债务发生时间是否处于主合同约定的期间之外。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条 保证方式</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">：</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span style="font-family:宋体; font-size:9pt">甲方在本合同项下提供的保证为连带责任保证。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条 保证期间</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >3</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >.1</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >本合同项下的保证期间按乙方为债务人办理的单笔授信业务分别计算，即自单笔授信业务的主合同签订之日起至债务人在该主合同项下的债务履行期限届满日后</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >两年</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >止。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >3</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >.2</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >乙方与债务人就主合同项下债务履行期限达成展期协议的</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >,</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >保证期间至展期协议重新约定的债务履行期限届满之日后</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >两年</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >止。展期无需经保证人同意，保证人仍需承担连带保证责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >3</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >.3</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >若发生法律法规规定或主合同约定的事项，乙方宣布债务提前到期的，保证期间至债务提前到期之日后</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline">三</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline">两</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >年止。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条 保证合同的独立性</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同的效力独立于主合同，主合同不成立、不生效、无效、部分无效或被撤销、被解除并不影响本合同的效力。如主合同被确认为不成立、不生效、无效、部分无效或被撤销、被解除，则甲方对于债务人因返还财产或赔偿损失而形成的债务也承担连带责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条 主合同变更</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >5</span>
          <span
            style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold; text-decoration:underline"
          >.1</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
          >甲方同意，乙方与债务人签订主合同或对主合同进行任何变更（包括但不限于延长债务履行期限或增加债权本金金额），均无需通知甲方，甲方仍应在本合同约定的最高额以及担保范围内承担担保责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方的保证责任不因出现下列任一情况而减免：（一）乙方或债务人发生改制、合并、兼并、分立、增减资本、合资、联营、更名等情形；（二）乙方委托第三方履行其在主合同项下的义务。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.3</span>
          <span style="font-family:宋体; font-size:9pt">主合同项下债权转让的，本合同项下的保证随之转让。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">5</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >主合同项下债权或债务的转移行为未生效、无效、被撤销、被解除，甲方仍按照本合同对乙方承担连带保证责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条 保证责任</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >如果主合同项下债务到期或者乙方根据主合同的约定或法律规定宣布债务提前到期，债务人未按时足额履行，或者债务人违反主合同的其他约定，甲方应在保证范围内承担保证责任。如果甲方未在乙方要求的期限内全部支付应付款项，应自逾期之日起至甲方向乙方支付全部应付款项之日止，根据迟延付款金额按每日万分之</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">_</span>
          <span style="font-family:宋体; font-size:9pt">五</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">_</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >的标准向乙方支付违约金。在此情形下，甲方承担的保证责任与上述违约金之和不以本合同约定的最高责任限额为限。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >无论乙方对主合同项下的债权是否拥有其他担保（包括但不限于保证、抵押、质押、保函、备用信用证等担保方式），不论上述其他担保何时成立、是否有效、乙方是否向其他担保人提出权利主张，也不论是否有第三方同意承担主合同项下的全部或部分债务，也不论其他担保是否由债务人自己所提供，甲方在本合同项下的保证责任均不因此减免，乙方均可直接要求甲方依照本合同约定在其保证范围内承担保证责任，甲方将不提出任何异议。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >如果本合同约定的保证责任最高限额低于主合同项下实际发生的债权余额，在甲方承担保证责任后主合同项下的债权仍未获完全清偿，则甲方承诺，其向债务人或其他担保人主张（包括预先行使）代位权或追偿权，不应使乙方利益受到任何损害，并同意主合同项下债务的清偿优先于甲方代位权或追偿权的实现。具体而言，在乙方债权未被全部清偿前：</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:宋体; font-size:9pt">）</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方同意不向债务人或其他担保人主张代位权或追偿权；如因任何原因，甲方实现了上述权利，则应将所获款项优先用于清偿乙方尚未获偿的债权；</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span style="font-family:宋体; font-size:9pt">）</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >主合同项下的债务如有物的担保，甲方同意不以行使代位权为由或任何其他原因对该担保物或其处分后所得价款提出权利主张，上述担保物及所得价款应优先用于清偿乙方尚未获偿的债权；</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
          <span style="font-family:宋体; font-size:9pt">）</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >若债务人或其他担保人为甲方提供了反担保，则甲方基于上述反担保而获得的款项应优先用于清偿乙方尚未获偿的债权。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">6</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方已充分认识到利率风险。如果乙方根据主合同的约定或者国家的利率政策变化而调整利率水平、计息或结息方式，导致债务人应偿还的利息、罚息、复利增加的，对增加部分，甲方也承担连带保证责任。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条 甲方的其他义务</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span style="font-family:宋体; font-size:9pt">甲方应对债务人借款使用情况（包括用途）进行监督。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方应接受乙方对其财务状况的监督和检查，应如实向乙方提供其财产情况和个人信用等有关资料，并保证上述资料的准确、真实、完整与有效性；未经乙方书面同意，甲方不得向第三方提供担保。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方发生国籍变更、住所地变更、婚姻情况变动、重大疾病、受到行政或刑事处罚、涉及重大民事法律纠纷、财务状况恶化，或者因任何原因丧失或可能丧失担保能力，应立即书面通知乙方，并按照乙方要求落实本合同项下保证责任的承担、转移或承继，或者为主合同的履行提供令乙方满意的新担保。如甲方未依据上述约定将其变更后住所地告知乙方，乙方依其合同载明通讯地址向其送达相关文书，即视为乙方已有效送达。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">7</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方作为控股股东或实际控制人的企业发生合并、分立、股权变动、增减资本、合资、联营等情形，应当在发生上述情形后</span>
          <span style="font-family:宋体; font-size:9pt; text-decoration:underline">叁</span>
          <span style="font-family:宋体; font-size:9pt">个工作日内书面通知乙方，并附相关材料。</span>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条 其他条款</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方同意乙方向中国人民银行个人信用信息基础数据库及信贷征信主管部门批准建立的个人信用数据库或有关单位、部门及个人查询甲方的信用状况，查询获得的信用报告限用于中国人民银行颁布的《个人信用信息基础数据库管理暂行办法》规定用途。甲方还同意乙方将甲方信用信息提供给中国人民银行个人信用信息基础数据库及信贷征信主管部门批准建立的个人信用数据库。甲方并同意，乙方为业务需要也可以合理使用并披露甲方信息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span style="font-family:宋体; font-size:9pt">对甲方的违约情形，乙方有权向有关部门或单位予以通报，有权通过新闻媒体进行公告催收。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >除非有可靠、确定的相反证据，乙方有关本金、利息、费用和还款记录等内容的内部账务记载，乙方制作或保留的债务人办理提款、还款、付利息等业务过程中发生的单据、凭证及乙方催收贷款的记录、凭证，均构成有效证明主合同项下债权关系的确定证据。甲方不能仅因为上述记录、记载、单据、凭证由乙方单方制作或保留，而提出异议。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >乙方在本合同项下的权利并不影响和排除其根据法律、法规和其它合同所享有的任何权利。任何对违约或延误行为施以宽容、宽限、优惠或延缓行使本合同项下的权利，均不能视为对本合同项下权利、权益的放弃或对任何违反本合同行为的许可或认可，也不影响、阻止和妨碍对该权利的继续行使或对其任何其它权利的行使，也不因此导致乙方对甲方承担义务和责任</span>
          <span style="font-family:宋体; font-size:9pt">。</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >如果乙方不行使或延缓行使主合同项下的任何权利或未用尽主合同项下的任何救济，甲方在本合同项下的保证责任并不因此减免，但是乙方若减免主合同项下债务，甲方在本合同项下的保证责任相应减免。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.5</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方知道债务人进入解散或破产程序后，应当立即通知乙方申报债权，同时自己应及时参加解散或破产程序，预先行使追偿权。甲方知道或者应当知道债务人进入解散或破产程序，但未能及时预先行使追偿权的，其损失由甲方自行承担。在债务人破产程序中，如果乙方与债务人达成和解协议，或者同意重整计划，本合同项下乙方的权利不因和解协议或重整计划而受到损害，甲方的保证责任不予以减免。甲方不得以和解协议、重整计划规定的条件对抗乙方的权利主张。乙方在和解协议、重整计划中对债务人作出让步而未能获得清偿的债权部分，仍有权要求甲方继续予以清偿。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.6</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方的通讯地址或联系方式如发生变动，应立即书面通知乙方，因未及时通知而造成的损失由甲方自行承担</span>
          <span style="font-family:宋体; font-size:9pt">。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.7</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >本合同在履行过程中发生争议，可以通过协商解决，协商不成，任一方均可向乙方住所地人民法院起诉解决。在诉讼期间，本合同不涉及争议部分的条款仍须履行。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.8</span>
          <span style="font-family:宋体; font-size:9pt">本合同经甲方签字及乙方负责人签字并加盖公章后生效。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.9</span>
          <span style="font-family:宋体; font-size:9pt">本合同一式</span>
          <input style="width: 40px" v-model="info.a15" type="text" />
          <span style="font-family:宋体; font-size:9pt">份，每份具有同等法律效力。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">8</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">.10</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:normal">其他约定事项：</span>
          <textarea
            name
            id
            cols="30"
            rows="1"
            style="text-indent: 20pt; font-size: 9pt; font-weight:600;"
            v-model="info.extra"
          ></textarea>
        </p>
        <p
          style="font-size:9pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条 甲方陈述与保证</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.1</span>
          <span style="font-family:宋体; font-size:9pt">甲方清楚地知悉乙方的经营范围、授权权限。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方已阅读本合同及主合同所有条款。应甲方要求，乙方已经就本合同及主合同做了相应的条款说明。甲方对本合同及主合同条款的含义及相应的法律后果已全部通晓并充分理解。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.2</span>
          <span style="font-family:宋体; font-size:9pt">甲方具备担当保证人的合法资格。</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt">9</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">.4</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >甲方确认自己对债务人的资产、债务、经营、信用、信誉等情况、是否具备签订主合同的主体资格和权限以及主合同的所有内容已经充分了解。</span>
        </p>
        <p style="font-size:9pt; line-height:130%; margin:0pt; text-align:justify">
          <span style="color:#ff0000; font-family:'Times New Roman'; font-size:9pt">&#xa0;</span>
        </p>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
      <div>
        <div class="clearfix">
          <div style="font-size:9pt; line-height:170%;  margin:0pt; float: left">
            <span style="font-family:宋体; font-size:9pt">甲方（签章）：</span>
            <input type="text" style="width: 150px;" v-model="info.partyASign" />
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
          <input type="text" style="width: 40px;" v-model="info.contractCreateMonth" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input type="text" style="width: 40px;" v-model="info.contractCreateDay" />
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
          <span style="font-family:宋体; font-size:9pt">作为本合同附件，本</span>
          <span style="font-family:宋体; font-size:9pt">公司</span>
          <span style="font-family:宋体; font-size:9pt">承诺如下：</span>
        </p>
        <p
          style="font-size:9pt; line-height:140%; margin:0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">本公司</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >确认在本合同履行过程中或因履行该合同发生争议引起诉讼、仲裁时，以下地址作为贵公司、人民法院、仲裁机关等邮寄送达有关通知、相关法律文书的接收地址：</span>
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
          <input type="text" style="width: 300px;" v-model="info.sendWho" />
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
            style="font-family:宋体; font-size:9pt; font-weight:bold; text-decoration:underline"
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
          <input style="width: 40px" v-model="info.a16" type="text" />
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width: 40px" v-model="info.a17" type="text" />
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width: 40px" v-model="info.a18" type="text" />
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
        partyB: "徐虹波",
        phoneNumber: "",
        idcard: "",
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
        extra:
          "各方均同意赋予本合同强制执行效力，进行强制执行公证。本合同解决争议的方式发生冲突时，约定赋予本合同强制执行效力的解决方式优先适用。",
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
        contractType: "0027"
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
}
textarea {
  width: 630px;
  resize: none;
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