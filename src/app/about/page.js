import Footer from '@/components/layout/Footer/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <section id="about-header" className="flex items-center justify-center bg-cover bg-center h-40" style={{ backgroundImage: 'url(/back3.png)' }}>
        <h1 className="text-white text-3xl">#What Is MedEase About?</h1>
      </section>

      <section id="about-head" className="flex items-center section-p1 py-10 px-20">
        <Image src="/back2.jpg" alt="Background" width={500} height={350} className="w-1/2 h-auto" />
        <div className="pl-10 text-justify">
          <h2 className="text-2xl mb-4">Who Are We?</h2>
          <p className="text-lg mb-4">"At the heart of our hospital, a beacon of hope shines through compassionate care, cutting-edge medicine, and a dedicated team. Together, we heal, nurture, and uplift lives, making a lasting impact on our community with empathy and innovation."</p>
          <abbr title="" className="text-gray-600 mb-4 block">Compassionate hospital, healing lives, inspiring community with innovation.</abbr>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Our hospital, a beacon of hope and compassion, delivers cutting-edge medicine, healing lives, and uplifting the community through empathy and innovation.</marquee>
        </div>
      </section>

      <section id="about-head" className="flex items-center flex-row-reverse section-p1 py-10 px-20">
        <Image src="/service2.2.png" alt="Service" width={500} height={350} className="w-1/2 h-auto" />
        <div className="pr-10 text-justify">
          <h2 className="text-2xl mb-4">Our Surgical Team</h2>
          <p className="text-lg mb-4">The hospital's surgical team epitomizes excellence, compassion, and unity. Their unwavering commitment and innovative approach in saving lives and restoring health inspire hope. With precision and care, they transform lives, leaving a profound impact on the community and shaping a brighter future.</p>
          <abbr title="" className="text-gray-600 mb-4 block">The hospital's skilled and dedicated surgical team embodies excellence, compassion, and innovation</abbr>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Skilled surgical team inspires hope, saving lives with compassion.</marquee>
        </div>
      </section>

      <section id="about-head" className="flex items-center section-p1 py-10 px-20">
        <Image src="/image2.avif" alt="Tech" width={500} height={350} className="w-1/2 h-auto" />
        <div className="pl-10 text-justify">
          <h2 className="text-2xl mb-4">Our Tech</h2>
          <p className="text-lg mb-4">"Inspired by cutting-edge technology and a commitment to excellence, our hospital's technical system empowers seamless, efficient, and compassionate care delivery. With innovation and precision, it elevates patient experiences, saving lives and transforming healthcare."</p>
          <abbr title="" className="text-gray-600 mb-4 block">Our hospital's technical system integrates cutting-edge technology, precision, and compassion to elevate patient care.</abbr>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Cutting-edge tech elevates care, saving lives, transforming healthcare delivery.</marquee>
        </div>
      </section>

      <section id="about-head" className="flex items-center flex-row-reverse section-p1 py-10 px-20">
        <Image src="/image1.1.png" alt="People" width={500} height={350} className="w-1/2 h-auto" />
        <div className="pr-10 text-justify">
          <h2 className="text-2xl mb-4">Our People</h2>
          <p className="text-lg mb-4">"United in their expertise and compassion, the doctors' team at our hospital embraces the noble mission of healing and restoring lives. With unwavering dedication, they bring hope and comfort to every patient, making a positive impact on our community. Together, they embody the power of collaboration, innovation, and resilience, and their commitment to delivering outstanding medical care is truly inspiring."</p>
          <abbr title="" className="text-gray-600 mb-4 block">Compassionate doctors bring hope, healing, and outstanding care to all.</abbr>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">The hospital's doctors' team, united in expertise and compassion, bring hope, healing, and outstanding medical care.</marquee>
        </div>
      </section>

      <Footer />
    </div>
  );
}
