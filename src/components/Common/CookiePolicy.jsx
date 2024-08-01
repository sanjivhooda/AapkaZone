import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const CookiePolicy = () => {
  return (
    <Layout className="min-h-screen bg-gray-100">
      <Content className="p-8 md:p-16 lg:p-24">
        <div className="bg-white p-6 md:p-12 lg:p-16 rounded-lg shadow-md">
          <Title level={2} className="text-center mb-8">Cookie Policy</Title>
          
          <Paragraph>
            Welcome to [Old Age Care Service]. This Cookie Policy explains how we use cookies and similar technologies on our website. By using our website, you agree to our use of cookies in accordance with this policy.
          </Paragraph>

          <Title level={3} className="mt-8">1. What Are Cookies?</Title>
          <Paragraph>
            Cookies are small text files placed on your device when you visit a website. They help the website to remember your preferences and actions over time, making your browsing experience more efficient and enjoyable.
          </Paragraph>

          <Title level={3} className="mt-8">2. How We Use Cookies</Title>
          <Paragraph>
            We use cookies to enhance your experience on our website, including:
            <ul className="list-disc list-inside mt-2">
              <li>Remembering your login information.</li>
              <li>Tracking your browsing preferences and settings.</li>
              <li>Analyzing website traffic and usage to improve our services.</li>
            </ul>
          </Paragraph>

          <Title level={3} className="mt-8">3. Types of Cookies We Use</Title>
          <Paragraph>
            We use the following types of cookies:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Essential Cookies:</strong> Necessary for the operation of our website and to provide services you request.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functionality Cookies:</strong> Allow the website to remember your preferences and provide enhanced, more personalized features.</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver advertisements more relevant to you and your interests.</li>
            </ul>
          </Paragraph>

          <Title level={3} className="mt-8">4. Managing Cookies</Title>
          <Paragraph>
            You can control and manage cookies through your browser settings. Most browsers allow you to refuse to accept cookies, delete existing cookies, or notify you when a new cookie is set. However, please note that disabling cookies may affect the functionality of our website.
          </Paragraph>

          <Title level={3} className="mt-8">5. Third-Party Cookies</Title>
          <Paragraph>
            We may also use third-party cookies from services such as Google Analytics to analyze website usage and performance. These cookies are managed by the third parties, and you should review their privacy policies for more information.
          </Paragraph>

          <Title level={3} className="mt-8">6. Changes to This Cookie Policy</Title>
          <Paragraph>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page. Your continued use of the website following any changes constitutes your acceptance of the updated policy.
          </Paragraph>

          <Title level={3} className="mt-8">7. Contact Us</Title>
          <Paragraph>
            If you have any questions about this Cookie Policy or our use of cookies, please contact us at [Contact Information].
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default CookiePolicy;
