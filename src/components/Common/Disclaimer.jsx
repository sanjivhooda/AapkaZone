import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Disclaimer = () => {
  return (
    <Layout className="min-h-screen bg-gray-100 mt-20">
      <Content className="p-4 md:p-8 lg:p-16">
        <div className="bg-white p-4 md:p-8 lg:p-12 rounded-lg shadow-md">
          <Title level={2} className="text-center mb-6 md:mb-8">Disclaimer</Title>

          <Paragraph>
            This website (‘Website’) is designed and maintained by Spshtech Solutions Limited Liability Partnership (‘Company’) to provide information to the users on an "As-Is" basis and does not guarantee the accuracy or reliability of such information. The Company shall not be liable for any losses that occur as a result of reliance on the information provided through the Website. The Company cannot guarantee and does not promise any specific results from use of the Website and/or the service or information provided through the Website.
          </Paragraph>

          <Paragraph>
            The Website is merely a platform to provide information regarding the services of the Company. The Company makes no representations or guarantees regarding the Website, or any content on it, including, but not limited to, broken links, hyperlinks, inaccuracies or typographical and/or clerical errors. Nor does it warrant that the Website will work/operate error-free or that the Website or its servers are free of computer viruses or other harmful mechanisms. The Company is, therefore, not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use of the Website, reference to, or reliance on any information contained and/or collected in the Website.
          </Paragraph>

          <Paragraph>
            While the information contained within the Website is periodically updated, the Company gives no guarantee that the information provided in this Website is correct, complete, and up-to-date. Nothing on the Website shall be considered an endorsement, representation or warranty with respect to any user or third party, whether in regard to its contents, information, services or otherwise. Further, although the Company is committed towards protecting the privacy of its users, the Company cannot ensure or warrant the security of any information you transmit to us.
          </Paragraph>

          <Paragraph>
            As a user of the Website, you agree and acknowledge that under no circumstances shall the Company/Website be liable to its users and/or any person claiming through such users and/or any third party(ies) for any action, suit, losses, cost, expenses or damage which is indirect, incidental, consequential, special or exemplary, or liabilities to third parties arising from any source. The users assume all responsibility and risk for using/accessing the Website.
          </Paragraph>

          <Paragraph>
            The users acknowledge and undertake that they are using/accessing the Website at their own risk and are using it with their best and prudent judgment. The Company shall not be liable nor responsible for any actions or inactions of its users and/or for any breach of conditions, representations or warranties by other users of the Website and hereby expressly disclaims any and all responsibility and liability in that regard.
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default Disclaimer;
