<template>
  <div class="contract-wrap">
    <div class="contract-content">
      <div>
        <p
          style="font-size:10.5pt; line-height:170%; margin:0pt; orphans:0; text-align:center; widows:0"
        >
          <span style="font-family:宋体; font-size:10.5pt; font-weight:bold">个人循环借款合同</span>
        </p>
        <p style="margin:0pt 63pt 0pt 0pt; orphans:0;  widows:0;font-size:9pt">
          <span style="font-family:宋体; font-size:9pt">合同编号：</span>
          <input style="width: 80px; text-align: left;" v-model="info.contractNumber" type="text">
        </p>
        <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  widows:0">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款人：</span>
          <input style="width:160px;" v-model="info.partyA" type="text">
          <span style="font-family:宋体; font-size:9pt;">（证件类型：</span>
          <input style="width:80px;" v-model="info.a2" type="text">
          <span style="font-family:宋体; font-size:9pt;">，证件号码：</span>
          <input style="width:80px;" v-model="info.a3" type="text">
          <span style="font-family:宋体; font-size:9pt;">）</span>
        </p>
        <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  widows:0">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">贷款人：</span>
          <!-- <input style="width:160px;" v-model="info.a14" type="text"> -->
          <input style="width:160px;" v-model="info.a1" type="text">
          <span style="font-family:宋体; font-size:9pt;">（证件类型：</span>
          <input style="width:80px;" v-model="info.a33" type="text">
          <span style="font-family:宋体; font-size:9pt;">，证件号码：</span>
          <input style="width:80px;" v-model="info.a34" type="text">
          <span style="font-family:宋体; font-size:9pt;">）</span>
        </p>
        <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  widows:0">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">保证人：</span>
          <input style="width:160px;" v-model="info.a4" type="text">
          <span style="font-family:宋体; font-size:9pt;">（证件类型：</span>
          <input style="width:80px;" v-model="info.a5" type="text">
          <span style="font-family:宋体; font-size:9pt;">，证件号码：</span>
          <input style="width:80px;" v-model="info.a6" type="text">
          <span style="font-family:宋体; font-size:9pt;">）</span>
        </p>
        <p style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  widows:0">
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">保证人：</span>
          <input style="width:160px;" v-model="info.a7" type="text">
          <span style="font-family:宋体; font-size:9pt;">（证件类型：</span>
          <input style="width:80px;" v-model="info.a8" type="text">
          <span style="font-family:宋体; font-size:9pt;">，证件号码：</span>
          <input style="width:80px;" v-model="info.a9" type="text">
          <span style="font-family:宋体; font-size:9pt;">）</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0; text-align:center; text-indent:20pt; widows:0"
        >
          <a name="_Hlk6927886"></a>
          <a name="_Hlk6927913">
            <span style="font-family:宋体; font-size:9pt; font-weight:bold">特别告知</span>
          </a>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >为了维护您的利益，在您签署本合同之前，请仔细阅读如下条款并确认有关事实，如果您对本合同条款及相关的业务有任何不解之处，请向我方咨询，仍有疑问，请暂缓签署本合同：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">1.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">您所提交的文件、材料及所作陈述是真实、合法、有效的。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">2.</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您有权签署本合同，若依法需要取得他人同意的，您已经取得充分授权。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">3.</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >您已经仔细阅读并同意接受本合同的所有条款，特别是加粗字体并带有“____”（下划线）标记的条款，并对其含义及法律后果有充分理解。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:bold">4.</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">本合同签署生效后，您必须按约行使权利并主动承担义务。</span>
          <span style="-aw-bookmark-end:_Hlk6927886"></span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="-aw-bookmark-end:_Hlk6927913"></span>
          <span style="font-family:宋体; font-size:9pt">经贷款人、借款人、保证人协商一致，根据国家有关法律、法规和规章规定，签订本合同。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第一条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">授信额度：</span>
          <span style="font-family:宋体; font-size:9pt">本合同项下的借款授信额度为本金人民币</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:30px;" v-model="info.a10" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">（大写</span>
          <span style="font-family:宋体; font-size:9pt">：</span>
          <input style="width:30px;" v-model="info.a18" type="text">
          <span style="font-family:宋体; font-size:9pt">），借款人使用上述授信额度的期限为自</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:40px;" v-model="info.a11" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">年</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a12" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">月</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a13" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">日起至</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:40px;" v-model="info.a15" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">年</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a16" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">月</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a17" type="text">
          </span>
          <span
            style="font-family:宋体; font-size:9pt"
          >日止，在上述期限内，借款人可循环使用上述借款额度，但在该期限内任何一时点上的借款本金余额不得超过该借款授信额度。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第二条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">贷款的发放：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >借款人在上述授信的借款额度和期限内，若需要使用借款的，可通过线下书面申请贷款人发放贷款，也可选择通过贷款人参与的互联网贷款平台（域名包括但不限于</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">mybank.cn</span>
          <span style="font-family:宋体; font-size:9pt">；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">alipay.com</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）申请贷款人发放贷款。借款人选择通过互联网贷款平台申请贷款人发放贷款的，除受本合同项下所有条款的约束外，还受互联网贷款平台上所有合约条款的约束。互联网贷款平台上所形成的借款合同及相关电子数据和凭证与本合同项下条款不一致的地方，以互联网贷款平台上所形成的借款合同及相关电子数据和凭证约定为准。互联网贷款平台上所形成的借款合同及相关电子数据和凭证没有约定或约定不明确的，以本合同条款为准。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第三条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款金额、期限和用途：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >具体每笔借款的金额和用途，以借款借据或互联网贷款平台上所形成的借款合同及相关电子数据和凭证为准，但不得晚于本合同第一条中约定的授信到期日。具体每笔借款的期限固定为（大写）</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a19" type="text">
          </span>
          <span
            style="font-family:宋体; font-size:9pt"
          >个月，如单笔借款到期日超过第一条中约定的授信到期日，则该笔以第一条中约定的授信到期日为借款到期日。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第四条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款利率：</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:normal">本合同项下单笔借款利率为固定利率，按月利率</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; font-weight:normal">
            <input style="width:30px;" v-model="info.a20" type="text">‰
          </span>
          <span style="font-family:宋体; font-size:9pt; font-weight:normal">执行。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第五条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">还款方式：</span>
          <span style="font-family:宋体; font-size:9pt">本合同项下贷款的还款方式及利息的支付方式为下述第</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:30px;" v-model="info.a21" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">种方式：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）按月等额本息：即每月偿付同等金额的应还款项（包括贷款本金、利息），借款人允许最后一月还款金额有适当偏差，每月还款金额详见贷款平台相关页面。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）按月等额本金还款：即按贷款人的要求，每月以固定金额偿还贷款本金，并偿付当月实际产生的利息，贷款到期日归还剩余贷款本金、利息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）按月付息，到期还本付息：即每月偿付当月实际产生的利息，贷款到期日归还全部贷款本金及剩余利息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
          <span style="font-family:宋体; font-size:9pt">）到期一次性还本付息：即贷款到期日一次性归还全部贷款本金并支付本贷款期间实际产生的利息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">借款人每月还款日为借款人贷款发放日所对应的自然日（若贷款发放日为</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">29</span>
          <span style="font-family:宋体; font-size:9pt">日、</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">30</span>
          <span style="font-family:宋体; font-size:9pt">日或</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">31</span>
          <span style="font-family:宋体; font-size:9pt">日，但借款人在还款当月无前述日期，则该月借款人的还款日为该月最后一日）。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第六条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">借款人承诺：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >（一）具备法律法规规定的借款主体资格，借款事项符合法律法规的要求；（二）本人及家庭成员信用状况良好，无重大不良记录；（三）及时向贷款人提供与本合同项下贷款资金发放、支付和使用有关的文件和凭证等，且提供的资料、文件、数据和信息真实、准确、完整、合法和有效；（四）配合贷款人进行支付管理，接受贷款人现场和非现场调查；（五）对应的保证合同项下的保证人部分或全部丧失担保能力，如出现停业、歇业、破产、解散、被吊销营业执照、被撤销、被合并（兼并或收购）、严重经营亏损或抵（质）押财产发生毁损、灭失或价值减少等情形，有义务及时告之贷款人并根据贷款人要求及时提供贷款人认可的担保；（六）借款人与其关联方达成的所有交易都将本着诚信、公平且不直接或间接损害贷款人本合同项下利益的原则进行；（七）发生影响偿债能力的重大不利事项时及时通知贷款人。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第七条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">合同担保：</span>
          <span style="font-family:宋体; font-size:9pt">担保人确认</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">:</span>
          <span style="font-family:宋体; font-size:9pt">本人同意在上述授信期间内为借款人向贷款人循环借款承担最高额保证，最高借款本金余额限额为</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a22" type="text">
          </span>
          <span
            style="font-family:宋体; font-size:9pt"
          >，保证责任形式为连带责任保证。该最高额保证适用于借款人通过线下书面及贷款人参与的互联网贷款平台（域名包括但不限于</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">mybank.cn</span>
          <span style="font-family:宋体; font-size:9pt">；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">alipay.com</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）申请贷款人发放贷款而发生的主债务。保证期限为本合同签订之日起至借款人在本合同项下的债务履行期限届满日后三年止。贷款人与借款人就主合同项下债务履行期限达成展期协议的，保证期间至展期协议重新约定的债务履行届满之日后三年止。展期无需经本人同意，本人仍承担连带保证责任。若发生法律规定或主合同约定的事项，贷款人宣布债务提前到期，保证期间至债务提前到期之日后三年。担保范围为本合同项下全部债务，包括但不限于全部本金、利息（包括罚息、复利）、违约金、赔偿金、贷款人实现债权与担保权利而发生的费用（诉讼费、保全费、保全担保费、执行费、执行费评估费、公告费、律师费、拍卖费、公证费、差旅费等）、借款人应向贷款人支付的其他款项。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第八条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">发生下列情况之一即构成违约或风险事件：</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >（一）未按期偿还贷款本金或未按期支付利息或不按借款借据特别约定的还款方式归还贷款本息的；（二）不按约定的贷款用途使用贷款的；（三）未按约定方式进行贷款资金支付；（四）借款人死亡、失踪或丧失民事行为能力的；（五）不遵守本合同承诺事项；（六）未按期向贷款人清偿其他到期债务；（七）未按期清偿其他任何金融机构或第三人到期债务的；（八）财产遭受哄抢等事件的；（九）卷入重大不利诉讼的；（十）被行政机关处以重大行政处罚的；（十一）参股、控股或实际控制的企业因经营不善而遭受重大经济纠纷、行政处罚、刑事犯罪、停产歇业的；（十二）隐瞒财务状况、经营状况或抽逃资金（本）的；（十三）发生偷（逃）税、被责令停业整顿或被吊销（撤销）营业执照的；（十四）发生其他严重影响偿还债务能力或失去信用情形的。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span
            style="font-family:宋体; font-size:9pt"
          >在本合同有效期内，借款人发生上述违约情形或风险事件时，贷款人有权要求借款人对本合同项下的债权提供符合贷款人要求的新的担保，或采取其他措施确保贷款人的合法权益不受侵害，借款人未按贷款人要求提供新的担保，或采取的措施未能确保贷款人的合法权益不受侵害的，贷款人有权采取以下任何一种或多种措施，包括但不限于：</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1.</span>
          <span style="font-family:宋体; font-size:9pt">按规定计收罚息和复利；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2.</span>
          <span style="font-family:宋体; font-size:9pt">宣布本合同项下已发放贷款提前到期，要求借款人立即偿还全部贷款及相应利息；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3.</span>
          <span style="font-family:宋体; font-size:9pt">按约定从借款人、保证人账户中扣划相应款项用于偿还贷款本息及费用；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">4.</span>
          <span style="font-family:宋体; font-size:9pt">要求保证人履行连带保证责任；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">5.</span>
          <span style="font-family:宋体; font-size:9pt">要求实现抵押权；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">6.</span>
          <span style="font-family:宋体; font-size:9pt">提前解除本合同；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">7.</span>
          <span style="font-family:宋体; font-size:9pt">其他法律允许的措施。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第九条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">违约责任：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >借款人违约及其违约责任：未按期归还借款本金、未按期偿付借款利息、未按合同约定使用借款，从违约之日起按借款合同所约定的利率加收</span>
          <span style="font-family:'Times New Roman'; font-size:9pt; text-decoration:underline">100</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">%</span>
          <span style="font-family:宋体; font-size:9pt">的罚息利率计收罚息。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">合同的履行：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >（一）本合同借款通过贷款人提供的业务平台（包括但不限于营业网点，互联网贷款平台等电子渠道）发放，贷款人将贷款资金划入借款人</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >指定账户时即视为履行了发放贷款之义务。（二）在上述业务平台及借款人账户通过密码验证的借款均视为借款人实施的操作。（三）具体每笔借款的金额、期限、利率和用途以相应的借款借据或互联网贷款平台（域名包括但不限于</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">mybank.cn</span>
          <span style="font-family:宋体; font-size:9pt">；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">alipay.com</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）产生的电子数据及凭证为准。（四）贷款人收回到期贷款本息或依约提前收回贷款本息，可直接从借款人账户中扣划。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十一条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">信息使用：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >借款人同意贷款人根据中国人民银行或其他管理部门的有关规定，在中国人民银行个人信用信息基础数据库及有关信息系统上录入（查询、披露）借款人的有关信息。借款人在本合同项下发生违约行为时，贷款人有权视违约情况，依法公开违约信息，或为催收之目的将有关信息提供给依法设立的催收机构。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十二条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">补充约定事项：</span>
          <input
            ref="extrainput"
            type="text"
            style="width:465px;"
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
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十三条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">争议解决方式：</span>
          <span style="font-family:宋体; font-size:9pt">本合同发生纠纷，由双方协商解决；协商不成的，向贷款人住所地人民法院提起诉讼。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十四条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">送达地址：</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >借款人及担保人分别确认以下送达地址适用于催款函、提前到期通知书、法院一审、二审、执行程序等所有送达。如果送达地址有变更，应当及时书面告知出借人变更后的送达地址。</span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">借款人确认送达地址：</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:480px;" v-model="info.a24" type="text">
          </span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">担保人确认送达地址：</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:480px;" v-model="info.a25" type="text">
          </span>
        </p>
        <p
          style="font-size:9pt; line-height:170%; margin:0pt; orphans:0;  text-indent:20pt; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">第十五条</span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold"></span>
          <span style="font-family:宋体; font-size:9pt; font-weight:bold">其他：</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">1</span>
          <span style="font-family:宋体; font-size:9pt">）</span>
          <span style="font-family:宋体; font-size:9pt">借款借据或互联网贷款平台（域名包括但不限于</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">mybank.cn</span>
          <span style="font-family:宋体; font-size:9pt">；</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">alipay.com</span>
          <span style="font-family:宋体; font-size:9pt">）产生的电子数据及凭证为本合同的组成部分，与本合同具有同等的法律效力。</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">2</span>
          <span
            style="font-family:宋体; font-size:9pt"
          >）本合同项下有关费用的支出，包括但不限于用于公证、评估、保险、保管、鉴定及实现债权的费用，实现债权的费用包括律师费、差旅费、诉讼费、保全费、保全担保费、执行费和其他合理费用，均由借款人及保证人连带承担。（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">3</span>
          <span style="font-family:宋体; font-size:9pt">）</span>
          <span
            style="font-family:宋体; font-size:9pt; font-weight:bold"
          >贷款人已提请借款人对本合同各条款作全面、准确的理解，并按借款人的要求对各条款予以充分说明；本合同各条款在订立前均进行了充分磋商；借款人确认对本合同各条款的含义及相应的法律后果已全部通晓并充分理解。</span>
          <span style="font-family:宋体; font-size:9pt">（</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">4</span>
          <span style="font-family:宋体; font-size:9pt">）本合同一式</span>
          <span style="font-family:'Times New Roman'; font-size:9pt">
            <input style="width:20px;" v-model="info.a26" type="text">
          </span>
          <span style="font-family:宋体; font-size:9pt">份，当事人各执一份，效力同等。本合同自各方签章之日起生效。</span>
        </p>
      </div>
      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0;    widows:0">
          <span style="font-family:宋体; font-size:14pt">&nbsp;</span>
        </p>
      <div>
        <div class="clearfix">
          <div style="font-size:9pt; line-height:170%; margin:0pt;  float: left">
            <span style="font-family:宋体; font-size:9pt">贷款人（签章）：</span>
            <input style="width:120px;" v-model="info.a27" type="text">
          </div>
          <div style="font-size:9pt; line-height:170%; margin:0pt;  float: right">
            <span style="font-family:宋体; font-size:9pt">借款人（签章）：</span>
            <input style="width:120px;" v-model="info.a28" type="text">
          </div>
        </div>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
        <p style="font-size:14pt; line-height:100%; margin:5pt 0pt; orphans:0;    widows:0">
          <span style="font-family:宋体; font-size:14pt">&nbsp;</span>
        </p>
        <div class="clearfix">
          <div style="font-size:9pt; line-height:170%; margin:0pt;  float: right">
            <span style="font-family:宋体; font-size:9pt">保证人（签章）：</span>
            <input style="width:120px;" v-model="info.a29" type="text">
          </div>
        </div>
      </div>

      <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
      <div>
        <p
          style="font-size:9pt; line-height:130%; margin:0pt; orphans:0; text-align:right; widows:0"
        >
          <span style="font-family:宋体; font-size:9pt">签约时间：</span>
          <input style="width:40px;" v-model="info.a30" type="text">
          <span style="font-family:宋体; font-size:9pt">年</span>
          <input style="width:20px;" v-model="info.a31" type="text">
          <span style="font-family:宋体; font-size:9pt">月</span>
          <input style="width:20px;" v-model="info.a32" type="text">
          <span style="font-family:宋体; font-size:9pt">日</span>
        </p>
        <br style="clear:both; mso-break-type:section-break; page-break-before:auto">
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
          a1: "安徽省安振小额贷款有限公司",
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
          partyA: "",
          a15: "",
          a16: "",
          a17: "",
          a18: "",
          a19: "",
          a20: "",
          a21: "",
          a22: "",
          extra: "",
          a24: "",
          a25: "",
          a26: "",
          a27: "",
          a28: "",
          a29: "",
          a30: "",
          a31: "",
          a32: "",
          a33: "营业执照",
          a34: "913401006941423604",
          contractCreateAddress: "合肥市庐阳区",
          operateTip: "",
          auditTip: "",
          contractType: "0014"
        };
      }
    },
    status: ""
  },
  data() {
    return {
      info: {
        contractNumber: "",
        a1: "安徽省安振小额贷款有限公司",
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
        partyA: "",
        a15: "",
        a16: "",
        a17: "",
        a18: "",
        a19: "",
        a20: "",
        a21: "",
        a22: "",
        extra: "",
        a24: "",
        a25: "",
        a26: "",
        a27: "",
        a28: "",
        a29: "",
        a30: "",
        a31: "",
        a32: "",
        a33: "营业执照",
        a34: "913401006941423604",
        contractCreateAddress: "合肥市庐阳区",
        operateTip: "",
        auditTip: "",
        contractType: "0014"
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
            nv["contractType"] = "0014";
          }
          // console.log("赋值");
          this.info = nv;
        }
      },
      immediate: true,
      deep: true
    },
    "info.extra": {
      handler(nv, ov) {
        // console.log(this.$refs);
        if (nv.length >= 20) {
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
