import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-display font-bold text-white mb-12">Privacy Policy</h1>
        
        <p className="text-neutral-400 text-lg leading-relaxed">
          At UltraScale AI, accessible from ultrascale.ai, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UltraScale AI and how we use it.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Log Files</h2>
        <p className="text-neutral-400 leading-relaxed">
          UltraScale AI follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Cookies and Web Beacons</h2>
        <p className="text-neutral-400 leading-relaxed">
          Like any other website, UltraScale AI uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Google DoubleClick DART Cookie</h2>
        <p className="text-neutral-400 leading-relaxed">
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Our Advertising Partners</h2>
        <p className="text-neutral-400 leading-relaxed">
          Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Google: <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a></li>
        </ul>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Privacy Policies</h2>
        <p className="text-neutral-400 leading-relaxed">
          You may consult this list to find the Privacy Policy for each of the advertising partners of UltraScale AI. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on UltraScale AI, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that UltraScale AI has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Children's Information</h2>
        <p className="text-neutral-400 leading-relaxed">
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. UltraScale AI does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
      </motion.div>
    </div>
  );
}
