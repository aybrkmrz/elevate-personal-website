
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  const currentDate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-foreground"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Kullanım Şartları</h1>
      <p className="mb-6 text-muted-foreground"><strong>Son Güncelleme:</strong> {currentDate}</p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">1. Şartların Kabulü</h2>
          <p className="text-muted-foreground">
            Web sitemize erişerek, dijital ürünler satın alarak veya eğitim hizmetlerimizi kullanarak, bu Kullanım Şartları'nı ve Gizlilik Politikamızı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, web sitemizi veya hizmetlerimizi kullanmamalısınız.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">2. Kullanıcı Sorumlulukları</h2>
          <p className="text-muted-foreground mb-3">Bu web sitesinin ve hizmetlerimizin bir kullanıcısı olarak şunları kabul edersiniz:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Formları doldururken veya satın alma yaparken doğru bilgi sağlamak.</li>
            <li>Sağlanan bilgi ve hizmetleri yalnızca kişisel, ticari olmayan kullanım için kullanmak.</li>
            <li>Kendi sağlığınızdan ve güvenliğinizden sorumlu olduğunuzu kabul etmek. Herhangi bir yeni fitness programına başlamadan önce bir hekime danışmalısınız.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">3. Fikri Mülkiyet Hakları</h2>
          <p className="text-muted-foreground">
            Metin, grafikler, logolar ve dijital ürünler (antrenman planları, diyet rehberleri) dahil olmak üzere bu web sitesindeki tüm içerik, web sitesi sahibinin mülkiyetindedir ve telif hakkı ve diğer fikri mülkiyet yasalarıyla korunmaktadır. Açık izin olmadan hiçbir içeriği çoğaltamaz, dağıtamaz veya türev çalışmalar oluşturamazsınız.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">4. Dijital Ürünler</h2>
          <p className="text-muted-foreground">
            Tüm dijital ürünlerin (ör. PDF'ler) satışı nihaidir. Dijital ürünlerin doğası gereği geri ödeme yapılmaz. Satın alma üzerine, ürünü kişisel amaçlar için kullanmak üzere tek, devredilemez bir lisans verilir.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">5. Sorumluluk Reddi</h2>
          <p className="text-muted-foreground">
            Bu sitede ve ürünlerimizde sağlanan fitness ve beslenme bilgileri yalnızca eğitim amaçlıdır. Biz tıp uzmanı değiliz. Yaşayabileceğiniz başarı düzeyiyle ilgili hiçbir garanti vermiyoruz ve sonuçların her birey için farklı olacağı riskini kabul ediyorsunuz. Hizmetlerimizi veya ürünlerimizi kullanmanız sonucunda yaşayabileceğiniz herhangi bir yaralanma veya sağlık sorunundan sorumlu değiliz.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">6. Üçüncü Taraf Hizmetleri</h2>
          <p className="text-muted-foreground">
            Web sitemiz, tarafımızca sahip olunmayan veya kontrol edilmeyen ödeme işlemcileri veya zamanlama araçları gibi üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. Herhangi bir üçüncü taraf web sitesinin içeriğinden veya uygulamalarından sorumlu değiliz.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">7. Şartlardaki Değişiklikler</h2>
          <p className="text-muted-foreground">
            Bu şartları herhangi bir zamanda değiştirme hakkımız saklıdır. Yeni şartları bu sayfada yayınlayarak kullanıcıları herhangi bir değişiklik hakkında bilgilendireceğiz. Bu tür değişikliklerden sonra siteyi kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">8. Bize Ulaşın</h2>
          <p className="text-muted-foreground">
            Bu Kullanım Şartları hakkında herhangi bir sorunuz varsa, lütfen iletişim sayfamızda verilen bilgiler aracılığıyla bizimle iletişime geçin.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default TermsOfUse;
