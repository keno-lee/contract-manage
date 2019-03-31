<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:center">
          <span style="font-family:仿宋; font-size:18pt; font-weight:bold">个人循环借款合同</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:230pt">
          <span style="font-family:仿宋; font-size:12pt">合同号：</span>
          <input style="width: 150px; text-align: left;" v-model="info.contractNumber" type="text">
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify;vertical-align: top;">
          <span style="font-family:仿宋; font-size:12pt;float:left">贷款人：</span>
          <input
            ref="partyAinput"
            type="text"
            style="width:451px;"
            v-show="info.partyA.length < 20"
            v-model="info.partyA"
            @input="inputListener"
          >
          <textarea
            ref="partyAtextarea"
            style="text-decoration:underline; border:none;width: 451px;"
            v-show="info.partyA.length >= 20"
            cols="30"
            v-model="info.partyA"
            rows="1"
          ></textarea>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify;vertical-align: top;">
          <span style="font-family:仿宋; font-size:12pt;float:left">借款人：</span>
          <input
            ref="a3input"
            type="text"
            style="width:451px;"
            v-show="info.a3.length < 20"
            v-model="info.a3"
            @input="inputListener"
          >
          <textarea
            ref="a3textarea"
            style="text-decoration:underline; border:none;width: 451px;"
            v-show="info.a3.length >= 20"
            cols="30"
            v-model="info.a3"
            rows="1"
          ></textarea>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify;vertical-align: top;">
          <span style="font-family:仿宋; font-size:12pt;float:left">担保人：</span>
          <input
            ref="a4input"
            type="text"
            style="width:451px;"
            v-show="info.a4.length < 20"
            v-model="info.a4"
            @input="inputListener"
          >
          <textarea
            ref="a4textarea"
            style="text-decoration:underline; border:none;width: 451px;"
            v-show="info.a4.length >= 20"
            cols="30"
            v-model="info.a4"
            rows="1"
          ></textarea>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">经贷款人、借款人、担保人协商一致，根据国家有关法律、法规和规章规定，签订本合同。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第一条 授信额度：</span>
          <span style="font-family:仿宋; font-size:12pt">
            本合同项下的借款授信额度为本金人民币
            <input style="width: 50px" v-model="info.a5" type="text">（大写），借款人使用上
          </span>
          <span style="font-family:仿宋; font-size:12pt">述</span>
          <span style="font-family:仿宋; font-size:12pt">授信</span>
          <span style="font-family:仿宋; font-size:12pt">
            额度的期限为自
            <input style="width: 50px" v-model="info.a6" type="text">年
            <input style="width: 50px" v-model="info.a7" type="text">月
            <input style="width: 50px" v-model="info.a8" type="text">日起至
            <input style="width: 50px" v-model="info.a9" type="text">年
            <input style="width: 50px" v-model="info.a10" type="text">月
            <input style="width: 50px" v-model="info.a11" type="text">日止，在上述期限内，借款人可循环使用上述借款额度，但在该期限内任何一时点上的借款本金余额不得超过该借款授信额度
          </span>
          <span style="font-family:仿宋; font-size:12pt">。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第二条 贷款的发放：</span>
          <span style="font-family:仿宋; font-size:12pt">借款人在上述授信的借款额度和期限内，若需要使用借款的，可通过</span>
          <span style="font-family:仿宋; font-size:12pt">线下</span>
          <span style="font-family:仿宋; font-size:12pt">书面申请贷款人发放贷款，也可选择通过贷款人参与的互联网贷款平台（域名包括但</span>
          <span style="font-family:仿宋; font-size:12pt">不限</span>
          <span style="font-family:仿宋; font-size:12pt">于mybank.cn；alipay.com</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >申请贷款人发放贷款。借款人书面申请贷款人发放贷款的，受本合同项下所有条款的约束。借款人选择通过互联网贷款平台申请贷款人发放贷款的，除受本合同项下所有条款的约束外，还受互联网贷款平台上所有合约条款的约束。</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >互联网贷款平台上所形成的借款合同及相关电子数据和凭证与本合同项下条款不一致的地方，以互联网贷款平台上所形成的借款合同及相关电子数据和凭证约定为准。互联网贷款</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >平台上所形成的借款合同及相关电子数据和凭证没有约定的或约定不明确的，以本合同项下约定的条款为准。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">三</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条</span>
          <span style="font-family:仿宋; font-size:12pt"></span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">借款</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">金额、</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">期限</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">和用途：</span>
          <span style="font-family:仿宋; font-size:12pt"></span>
          <span style="font-family:仿宋; font-size:12pt">具体每笔借</span>
          <span style="font-family:仿宋; font-size:12pt">款的金额和用途，以</span>
          <span style="font-family:仿宋; font-size:12pt">借款借据或互联网贷款平台上所形成的借款合同及相关电子数据和凭证为准。</span>
          <span style="font-family:仿宋; font-size:12pt">具体每</span>
          <span style="font-family:仿宋; font-size:12pt">笔借款的期限固定为</span>
          <span style="font-family:仿宋; font-size:12pt">
            <input style="width: 50px" v-model="info.a12" type="text">
          </span>
          <span style="font-family:仿宋; font-size:12pt">个</span>
          <span style="font-family:仿宋; font-size:12pt">月</span>
          <span style="font-family:仿宋; font-size:12pt">，</span>
          <span style="font-family:仿宋; font-size:12pt">如单笔借款到期日超过</span>
          <span style="font-family:仿宋; font-size:12pt">第一条中约定的</span>
          <span style="font-family:仿宋; font-size:12pt">授信到期日，则该笔借款到期日即为授信到期日。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">四</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 借款利率：</span>
          <span style="font-family:仿宋; font-size:12pt">本合同项下单笔借款利率</span>
          <span style="font-family:仿宋; font-size:12pt">
            按
            <input style="width: 50px" v-model="info.a13" type="text">（
            <input v-model="info.a14" class="only" type="checkbox" @click="chose($event)">年
            <input v-model="info.a15" class="only" type="checkbox" @click="chose($event)">月
            <input v-model="info.a16" class="only" type="checkbox" @click="chose($event)">日）执行。
          </span>
          <span style="font-family:仿宋; font-size:12pt">如遇中国人民银行调整法定利率的，仍按本条约定的利率执行。</span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">五</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 还款方式：</span>
          <span style="font-family:仿宋; font-size:12pt">
            本合同项下贷款的还款方式及利息的支付方式为下述第
            <input style="width: 50px" v-model="info.a17" type="text">种方式：
          </span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span style="font-family:仿宋; font-size:12pt">（1）</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >按月等额本息：即每月偿付同等金额的应还款项（包括贷款本金、利息），借款人允许最后一月还款金额有适当偏差，每月还款金额详见贷款平台相关页面。</span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span style="font-family:仿宋; font-size:12pt">（</span>
          <span style="font-family:仿宋; font-size:12pt">2</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >按月等额本金还款：即按贷款人的要求，每月以固定金额偿还贷款本金，并偿付当月实际产生的利息，贷款到期日归还剩余贷款本金、利息。</span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span style="font-family:仿宋; font-size:12pt">（</span>
          <span style="font-family:仿宋; font-size:12pt">3</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >按月付息，到期还本付息：即每月偿付当月实际产生的利息，贷款到期日归还全部贷款本金及剩余利息。</span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span style="font-family:仿宋; font-size:12pt">（</span>
          <span style="font-family:仿宋; font-size:12pt">4</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span style="font-family:仿宋; font-size:12pt">到期一次性还本付息：即贷款到期日一次性归还全部贷款本金并支付本贷款期间实际产生的利息。</span>
        </p>
        <p
          style="background-color:#ffffff; line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt"
        >
          <span
            style="font-family:仿宋; font-size:12pt"
          >借款人每月还款日为借款人贷款发放日所对应的自然日（若贷款发放日为29日、30日或31日，但借款人在还款当月无前述日期，则该月借款人的还款日为该月最后一日）。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">六</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 借款人承诺：</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >（一）具备法律法规规定的借款主体资格，借款事项符合法律法规的要求；（二）本人及家庭成员信用状况良好，无重大不良记录；（三）及时向贷款人提供与本合同项下贷款资金发放、支付和使用有关的文件和凭证等，且提供的资料、文件、数据和信息真实、准确、完整、合法和有效；（四）配合贷款人进行支付管理，接受贷款人现场和非现场调查；（五）对应的保证合同项下的保证人部分或全部丧失担保能力</span>
          <span style="font-family:仿宋; font-size:12pt">，</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >如出现停业、歇业、破产、解散、被吊销营业执照、被撤销、被合并（兼并或收购）、严重经营亏损或抵（质）</span>
          <span style="font-family:仿宋; font-size:12pt">押财产</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >发生毁损、灭失或价值减少等情形，有义务及时告之贷款人并根据贷款人要求及时提供贷款人认可的担保；（六）借款人与其关联方达成的所有交易都将本着诚信、公平且不直接或间接损害贷款人本合同项</span>
          <span style="font-family:仿宋; font-size:12pt">下利益</span>
          <span style="font-family:仿宋; font-size:12pt">的原则进行；（七）发生影响偿债能力的重大不利事项时及时通知贷款人。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">七</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 合同担保：</span>
        </p>
        <p style="line-height:19pt; margin:0pt 0pt 10pt; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">担保人确认:本人同意在上述授</span>
          <span style="font-family:仿宋; font-size:12pt">信期间</span>
          <span style="font-family:仿宋; font-size:12pt">内为借款人向贷款人循环借款承担最高额保证，最高借款本金限额为</span>
          <span style="font-family:仿宋; font-size:12pt">
            <input style="width: 50px" v-model="info.a18" type="text">
          </span>
          <span style="font-family:仿宋; font-size:12pt">,保证责任形式为连带责任保证。该</span>
          <span style="font-family:仿宋; font-size:12pt">最</span>
          <span style="font-family:仿宋; font-size:12pt">高额保证适用于借款人通过线下书面及贷款人参与的互联网贷款平台（域名包括但不</span>
          <span style="font-family:仿宋; font-size:12pt">限</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >于mybank.cn；alipay.com）申请贷款人发放贷款而发生的主债务。保证期限为本合同签订之日起至借款人在本合同项下的债务履行期限届满日后两年止。贷款人与借款</span>
          <span style="font-family:仿宋; font-size:12pt">人就主合同</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >项下债务履行期限达成展期协议的，保证期间至展期协议重新约定的债务履行届满之日后两年止。展期无需经本人同意，本人仍承担连带保证责任。若发生法律规定或主合同约定的事项，贷款人宣布债务提前到期，保证期间至债务提前到期之日后两年。担保范围为本合同项下全部债务，包括不限于全部本金、利息（包括罚息、复利）、违约金、赔偿金、贷款人实现债权与担保权利而发生的费用（诉讼费、保全费</span>
          <span style="font-family:仿宋; font-size:12pt">、保全担保费、执行费、执行费评估费、公告费、律师费、拍卖费、公证费、差旅费等）、借款</span>
          <span style="font-family:仿宋; font-size:12pt">人应向贷款人支付的其他款项。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">八</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 发生下列情况之一即构成违约或风险事件：</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >（一）未按期偿还贷款本金或未按期支付利息或不按借款借据特别约定的还款方式归还贷款本息的；（二）不按约定的贷款用途使用贷款的；（三）未按约定方式进行贷款资金支付；（四）借款人死亡、失踪或丧失民事行为能力的；（五）不遵守本合同承诺事项；（六）未按期向贷款人清偿其他到期债务；（七）未按期清偿其他任</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >何金融机构或第三人到期债务的；（八）财产遭受哄抢等事件的；（九）卷入重大不利诉讼的；（十）被行政机关处以重大行政处罚的；（十一）因经营不善而停产歇业的；（十二）隐瞒财务状况、经营状况或抽逃资金（本）的；（十三）发生偷（逃）税、被责令停业整顿或被吊销（撤销）营业执照的；（十四）发生其他严重影响偿还债务能力或失去信用情形的。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">在本合同有效期内，借款人发生上述第（</span>
          <span style="font-family:仿宋; font-size:12pt">一</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >）（二）（四）（六）（九）（十一）（十三）（十四）违约情形或风险事件时，贷款人有权采取以下任何一项或多项措施，包括但不限于：1.按规定计收罚息和复利；2.停止发放贷款，宣布本合同项下已发放贷款提前到期，要求借款人立即偿还全部贷款及相应利息；3.按约定从借款人、保证人账户中扣划相应款项用于偿还贷款本息及费用；4.要求保证人履行连带保证责任；5.要求实现抵押权；6.提前解除本合同；7.其他法律允许的措施。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span
            style="font-family:仿宋; font-size:12pt"
          >在本合同有效期内，借款人发生上述第（三）（五）（七）（八）（十）（十二）违约情形或风险事件时，贷款人有权要求借款人对本合同项下的债权提供符合贷款人要求的新的担保，或采取其他措施确保贷款人的合法权益不受侵害，借款人未按贷款人要求提供新的担保，或采取的措施未能确保贷款人的合法权益不受侵害的，贷款人有权采取以下任何一种或多种措施，包括但不限于：1.按规定计收罚息和复利；2.宣布本合同项下已发放贷款提前到期，要求借款人立即偿还全部贷款及相应利息；3.按约定从借款人、保证人账户中扣划相应款项用于偿还贷款本息及费用；4.要求保证人履行连带保证责任；5.要求实现抵押权；6.提前解除本合同；7.其他法律允许的措施。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">九</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 违约责任：</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">
            借款人违约及其违约责任：1.未按期归还借款本金，从逾期之日起按借款合同所约定的利率加收
            <input
              style="width: 50px"
              v-model="info.a19"
              type="text"
            >%的罚
          </span>
          <span style="font-family:仿宋; font-size:12pt">息利率</span>
          <span style="font-family:仿宋; font-size:12pt">计收罚息</span>
          <span style="font-family:仿宋; font-size:12pt">。2.未按期偿付借款利息，按</span>
          <span style="font-family:仿宋; font-size:12pt">
            借款合同所约定的利率加收
            <input style="width: 50px" v-model="info.a20" type="text">%的罚
          </span>
          <span style="font-family:仿宋; font-size:12pt">息利率</span>
          <span style="font-family:仿宋; font-size:12pt">计收罚息</span>
          <span style="font-family:仿宋; font-size:12pt">。</span>
          <span style="font-family:仿宋; font-size:12pt">
            3.未按合同约定使用借款，在挪用期间按约定利率加收
            <input style="width: 50px" v-model="info.a21" type="text">%的罚
          </span>
          <span style="font-family:仿宋; font-size:12pt">息利率</span>
          <span style="font-family:仿宋; font-size:12pt">计收罚息。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">十</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 合同的履行：</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >（一）本合同借款通过贷款人提供的业务平台（包括但不限于营业网点，互联网贷款平台等电子渠道）发放，贷款人将贷款资金划入借款人账户时即视为履行了发放贷款之义务。（二）在上述业务平台及借款人账户通过密码验证的借款均视为借款人实施的操作。（三）具体每笔借款的金额、期限、利率和用途以相应的借款借据或互联网贷款平台（域名包括但不限于mybank.cn；alipay.com</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >产生的电子数据及凭证为准。（四）贷款人收回到期贷款本息或依约提前收回贷款本息，可直接从借款人账户中扣划。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">十一</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条 信息使用：</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >借款人同意贷款人根据中国人民银行或其他管理部门的有关规定，在中国人民银行个人信用信息基础数据库及有关信息系统上录入（查询、披露）借款人的有关信息。借款人在本合同项下发生违约行为时，贷</span>
          <span style="font-family:仿宋; font-size:12pt">款人有权视违约情况，依法公开违约信息，或为催收之目的将有关信息提供给依法设立的催收机构。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第十</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">二</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">补充</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">约定事项：</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">
            <!-- <textarea name id cols="30" rows="1" style="text-indent: 22pt" v-model="info.a28"></textarea> -->
            <input
            ref="a28input"
            type="text"
            style="width:600px;text-indent:2em;"
            v-show="info.a28.length < 20"
            v-model="info.a28"
            @input="inputListener"
          >
          <textarea
            ref="a28textarea"
            style="text-decoration:underline; border:none;width: 600px;;text-indent:2em;"
            v-show="info.a28.length >= 20"
            cols="30"
            v-model="info.a28"
            rows="1"
          ></textarea>
          </span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">十三</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold"></span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">争议解决方式：</span>
          <span style="font-family:仿宋; font-size:12pt">本合同发生纠纷，由双方协商解决；协商不成的，向贷款人住所地人民法院提起诉讼。</span>
        </p>
        <p style="line-height:19pt; margin:0pt 0pt 10pt; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第十</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">四</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">送达地址：</span>
          <span
            style="font-family:仿宋; font-size:12pt"
          >借款人及担保人分别确认以下送达地址适用于一审、二审、执行程序。如果送达地址有变更，应当及时书面告知出借人变更后的送达地址。</span>
        </p>
        <p style="line-height:19pt; margin:0pt 0pt 10pt;vertical-align:center;">
          <span style="font-family:仿宋; font-size:12pt;float:left;">借款人确认送达地址：</span>
          <span style="font-family:仿宋; font-size:12pt">
            <input
              ref="a22input"
              type="text"
              style="width:400px;"
              v-show="info.a22.length < 20"
              v-model="info.a22"
              @input="inputListener"
            >
            <textarea
              ref="a22textarea"
              style="text-decoration:underline; border:none;width: 400px;"
              v-show="info.a22.length >= 20"
              cols="30"
              v-model="info.a22"
              rows="1"
            ></textarea>
          </span>
        </p>
        <p style="line-height:19pt; margin:0pt 0pt 10pt;vertical-align:center;">
          <span style="font-family:仿宋; font-size:12pt;float:left;">担保人确认送达地址：</span>
          <span style="font-family:仿宋; font-size:12pt">
            <input
              ref="a23input"
              type="text"
              style="width:400px;"
              v-show="info.a23.length < 20"
              v-model="info.a23"
              @input="inputListener"
            >
            <textarea
              ref="a23textarea"
              style="text-decoration:underline; border:none;width: 400px;"
              v-show="info.a23.length >= 20"
              cols="30"
              v-model="info.a23"
              rows="1"
            ></textarea>
          </span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">第十</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">五</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">条</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold"></span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">其他</span>
          <span style="font-family:仿宋; font-size:12pt; font-weight:bold">：</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">一、借款借据或互联网贷款平台（域名包括但不限于mybank.cn；alipay.com</span>
          <span style="font-family:仿宋; font-size:12pt">）</span>
          <span style="font-family:仿宋; font-size:12pt">产生的电子数据及凭证为本合同的组成部分，与本合同具有同等的法律效力。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">二、本合同自各方签字（盖章）之日起生效。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span
            style="font-family:仿宋; font-size:12pt"
          >三、本合同项下有关费用的支出，包括但不限于用于公证、评估、保险、保管、鉴定及实现债权的费用，实现债权的费用包括律师费、差旅费、诉讼费和其他合理费用，均由借款人承担。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span
            style="font-family:仿宋; font-size:12pt; font-weight:bold"
          >四、贷款人已提请借款人对本合同各条款作全面、准确的理解，并按借款人的要求对各条款予以充分说明；本合同各条款在订立前均进行了充分磋商；借款人确认对本合同各条款的含义及相应的法律后果已全部通晓并充分理解。</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:22pt">
          <span style="font-family:仿宋; font-size:12pt">
            五、本合同一式
            <input style="width: 50px" v-model="info.a24" type="text">份，当事人各执一份，效力同等。
          </span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt;display:inline-block;width: 50%;">贷款人（签章）：</span>
          <span style="font-family:仿宋; font-size:12pt">借款人（签字）：</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:11pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:13.5pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:13.5pt">
          <span style="font-family:仿宋; font-size:12pt;display:inline-block;width: 50%;">保证人（签字）：</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:231pt">
          <span style="font-family:仿宋; font-size:12pt">&nbsp;</span>
        </p>
        <p style="line-height:19pt; margin:0pt; text-align:justify; text-indent:231pt">
          <span style="font-family:仿宋; font-size:12pt">签约时间：</span>
          <span style="font-family:仿宋; font-size:12pt"></span>
          <input style="width: 50px" v-model="info.a25" type="text">
          <span style="font-family:仿宋; font-size:12pt">年</span>
          <input style="width: 50px" v-model="info.a26" type="text">
          <span style="font-family:仿宋; font-size:12pt">月</span>
          <input style="width: 50px" v-model="info.a27" type="text">
          <span style="font-family:仿宋; font-size:12pt">日</span>
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
// 个人综合授信
export default {
  props: {
    infoData: {
      default: () => {
        return {
          contractNumber: "",
          partyA: "",
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
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0006"
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
        contractCreateAddress: "",
        operateTip: "",
        auditTip: "",
        contractType: "0006"
      }
    };
  },
  created() {
    this.$nextTick(() => {
      // let onlyInputs = document.querySelectorAll('input.only')
      // // console.log(onlyInputs)
      // onlyInputs.forEach(v => {
      //   v.addEventListener("input", e => {
      //     console.log(v.disable)
      //     if ()
      //   })
      // })
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

        if (!v.classList.contains("only")) {
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
              let everyWidth = Math.ceil(
                (currentWidth - lastWidth) / addLength
              ); // 这是每次增加的长度
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
        }
      });
    });
  },
  methods: {
    chose(e) {
      // console.log(e)
      // debugger
      // let onlyInputs = document.querySelectorAll("input.only");
      // onlyInputs.forEach(v => {
      //   console.log(v);
      //   v.checked = false;
      // });
      // console.log(e.target);
      // e.target.checked = true;
    },
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
            nv["contractType"] = "0006";
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
    "info.a3": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a3textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a3input.focus();
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
    "info.a22": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a22textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a22input.focus();
          });
        }
      }
    },
    "info.a23": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a23textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a23input.focus();
          });
        }
      }
    },
    "info.a28": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
          this.$nextTick(() => {
            this.$refs.a28textarea.focus();
          });
        } else {
          this.$nextTick(() => {
            this.$refs.a28input.focus();
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