import React from "react";
import { Form, Input, Radio, Button } from "antd";
import careCouncellor from '../../assets/care-councellor.jpg'

const { TextArea } = Input;

const CareCounsellor = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <section className="my-8">
        <h1 className="text-4xl font-bold text-center">
          Become A Care Counsellor
        </h1>
        <p className="text-center mt-4">
          AapkaZone ElderCare is the Gold-standard among professionally managed
          services for elderly available across the country, helping them age
          comfortably at their own home. We care like family for elderly,
          without compromise, through our Care teams, network of associates and
          selected service partners covering physical as well as social and
          emotional needs of the elderly. The focus of our approach is on
          building trust and an unmatched reputation for reliability and
          transparency. Our people, processes, technology, training, delivery
          and business model are all tailored towards this goal. The mandate for
          every AapkaZone team member is "to act like the son/daughter to the
          elderly". We offer a professional working environment, very good
          opportunity to learn and grow, and compensation that values the
          difference you make to the elderly around you.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold">Job Profile</h2>
        <p>
          Care Counsellors are the heart of AapkaZone. Each Care Counsellor has
          a very high degree of empathy, understanding, and a commitment to help
          senior citizens. What do we expect our Care Counsellors to do:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Fortnightly/weekly visit to elders for ensuring well-being.</li>
          <li>
            Assistance for activities as required – arranging support, services
            setup, health checks and appointments, documentation etc.
          </li>
          <li>Accompany them on visits such as hospital, bank, shopping.</li>
          <li>Help with usage of technology and mobile.</li>
          <li>Engagement around interests.</li>
        </ul>
      </section>

      <div className="my-8 grid grid-cols-2 gap-12">
        <div className="col-span-1">
        <h2 className="text-2xl font-bold">What Are We Looking For</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>
            What is needed most is a sense of compassion, genuine care and
            pleasant disposition.
          </li>
          <li>
            While the role is gender neutral, women constitute more than 90% of
            our organisation (and perhaps for a good reason)
          </li>
          <li>
            Well educated, with proficiency in English, Hindi and Local Language
          </li>
          <li>
            Have approximately 3-4 hours a day, twice a week for care visit.
          </li>
          <li>
            Active and resourceful (generally between 30 and 50 yrs, though we
            have some exceptions)
          </li>
          <li>Comfortable with basic technology</li>
          <li>
            Willing to travel locally (generally families under care are within
            30 mins of travel)
          </li>
          <li>Experience of caring for elderly in own family is a plus</li>
        </ul>
        </div>
        <div className="col-span-1 px-10 ">
            <img src={careCouncellor} className="rounded-3xl" />
        </div>
      </div>

      <div className=" mx-48 p-4 py-12 bg-gray-100 rounded-lg ">
        <div>
          <h2 className="text-2xl font-bold pb-4 flex items-center justify-center">
            Apply Now
          </h2>
          <Form
            name="applyForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="space-y-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                label="First name"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last name"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
              className="mb-2"
            >
              <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="mobileNo"
                label="Mobile No."
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="birthYear"
                label="Year of birth"
                rules={[
                  {
                    required: true,
                    message: "Please input your year of birth!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="city"
                label="Your city"
                rules={[
                  {
                    required: true,
                    message: "Please input your city!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="locality"
                label="Locality where you live"
                rules={[
                  {
                    required: true,
                    message: "Please input your locality!",
                  },
                ]}
                className="mb-2"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              name="pincode"
              label="Pincode"
              rules={[
                {
                  required: true,
                  message: "Please input your pincode!",
                },
              ]}
              className="mb-2"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="education"
              label="Education qualifications"
              rules={[
                {
                  required: true,
                  message: "Please select your education qualification!",
                },
              ]}
              className="mb-2"
            >
              <Radio.Group>
                <Radio value="Did not graduate">Did not graduate</Radio>
                <Radio value="Graduate (BA, BSc etc)">
                  Graduate (BA, BSc etc)
                </Radio>
                <Radio value="Postgraduate (MA, MSc, PhD etc)">
                  Postgraduate (MA, MSc, PhD etc)
                </Radio>
                <Radio value="Professional (B Tech, MBA, MBBS etc)">
                  Professional (B Tech, MBA, MBBS etc)
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="employment"
              label="Current Employment"
              rules={[
                {
                  required: true,
                  message: "Please select your current employment status!",
                },
              ]}
              className="mb-2"
            >
              <Radio.Group>
                <Radio value="Full-time">Full-time</Radio>
                <Radio value="Part-time">Part-time</Radio>
                <Radio value="None">None</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="employmentDetails"
              label="Nature of employment (if employed)"
              className="mb-2"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="availability"
              label="How flexible are you regarding your availability"
              rules={[
                {
                  required: true,
                  message: "Please input your availability!",
                },
              ]}
              className="mb-2"
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="reference"
              label="How did you reach AapkaZone"
              rules={[
                {
                  required: true,
                  message: "Please input how you reached AapkaZone!",
                },
              ]}
              className="mb-2"
            >
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item className="mb-2">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CareCounsellor;
