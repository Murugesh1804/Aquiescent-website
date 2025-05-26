import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Acquiescent",
  description: "Privacy Policy for Acquiescent - Learn about how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Privacy Policy</h1>
        
        {/* <div className="border-l-4 border-primary pl-4 mb-8 bg-blue-50 p-4 rounded-r-md">
          <p className="text-gray-700 italic">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div> */}
        
        <div className="prose max-w-none text-gray-700">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Introduction</h2>
            <p className="leading-relaxed">
              Acquiescent Consultancy Services India Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">The Data We Collect About You</h2>
            <p className="leading-relaxed mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong className="text-primary">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-primary">Contact Data</strong> includes email address, telephone numbers, and physical address.</li>
              <li><strong className="text-primary">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-primary">Usage Data</strong> includes information about how you use our website, products, and services.</li>
              <li><strong className="text-primary">Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">How We Collect Your Personal Data</h2>
            <p className="leading-relaxed mb-4">We use different methods to collect data from and about you including through:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong className="text-primary">Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
              <li><strong className="text-primary">Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              <li><strong className="text-primary">Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">How We Use Your Personal Data</h2>
            <p className="leading-relaxed mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>
          
          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Data Security</h2>
            <p className="leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Data Retention</h2>
            <p className="leading-relaxed">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Your Legal Rights</h2>
            <p className="leading-relaxed mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
              </ul>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <p className="font-bold text-primary mb-2">Email</p>
                <a href="mailto:info@acquiescent.in" className="text-blue-600 hover:underline">info@acquiescent.in</a>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <p className="font-bold text-primary mb-2">Phone</p>
                <a href="tel:+917829889287" className="text-blue-600 hover:underline">+91 78298 89287</a>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <p className="font-bold text-primary mb-2">Address</p>
                <p className="text-sm">Plot No. 26, H.No. 2-53/1/4, Ground Floor, LAXMI ENCLAVE, Gachibowli, near EPTRI, Ranga Reddy District, Hyderabad - 500032</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}