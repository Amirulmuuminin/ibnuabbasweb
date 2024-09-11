import prisma from "../../db";

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
}

export async function getAllSlug() {
  const posts = await prisma.post.findMany();
  const allSlug = posts.map((item) => item.slug);
  return allSlug;
}

export async function deletePostBySlug(slug: string) {
  await prisma.post.delete({
    where: { slug },
  });
  console.log(slug, "deleted");
}

export async function getLatestPosts() {
  return await prisma.post.findMany({
    take: 5,
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getNext5Post() {
  return await prisma.post.findMany({
    skip: 5,
    take: 5,
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getPostByCategory(category: string) {
  const categoryData = await prisma.category.findUnique({
    where: { name: category },
  });
  const categoryId = categoryData?.id;

  return await prisma.post.findMany({
    where: { categoryId },
  });
}

export async function getAllPost() {
  return await prisma.post.findMany({});
}

export async function editPostBySlug(slug: string) {
  const newContent = `
  <div style="font-family: Poppins, sans-serif; line-height: 1.6; color: #333;">
    
    <p>Sebagai seorang guru, saya selalu belajar dari setiap murid yang saya ajar. Belajar sambil mengajar. Begitulah kira-kira singkatnya. Guru yang selalu belajar maka tak akan habis ‘sihirnya’ dihadapan para murid. Bagaikan iman yang tak lengkap tanpa amal, begitulah materi pengajaran; kurang lengkap kiranya jika tidak berbekal banyak metode pengajaran.</p>
    <br>
    <p>Betapa senangnya saya hari ini, banyak inspirasi dan motivasi yang saya serap dari para murid kelas 6 halaqah Muadz A dan B.</p>
    <br>
    <p style="font-style: italic;">“Apa yang terbesit dalam hati kalian semua saat mendengar nama Rasulullah SAW disebut?”</p>
    <br>
    <p>Saya tanyakan sambil memulai pelajaran pagi tadi. Pelajaran tarbiyah kali ini bertajuk <strong>#muhammadteladanku</strong> mengupas ayat qur’an di surah al-Ahzab: 21.</p>
    <br>
    <p>Si A menjawab, <span style="font-style: italic;">“Rindu dan sedih”</span>. Saya pun penasaran akan jawabannya. Apa sih yang engkau maksud dengan rindu dan sedih? Lalu ia menjelaskan dengan mata berkaca-kaca, <span style="font-style: italic;">“Aku rindu kepada Rasulullah SAW karena belum pernah melihat beliau. Dan aku sedih karena terlalu banyak siksaan yang telah dilakukan orang-orang Musyrikun kepada beliau.”</span> Maa syaa Allah, jawabannya membuatku terkagum.</p>
    <br>
    <p>Anak sekecil ini sudah sangat merindukan Nabinya bahkan memahami kesedihan baginda Nabi akibat siksaan musuh-musuhnya.</p>
    <br>
    <p>Murid yang lain seakan tak mau ketinggalan; Si B pun mengangkat tangan. <span style="font-style: italic;">“Aku ingin mesin waktu ustadz!”</span> Belum selesai ia menjawab, murid-murid lain pun tertawa padanya. Tapi ia mencoba melanjutkan penjelasannya, <span style="font-style: italic;">“Maksud saya; dengan mesin waktu saya bisa hidup bersama Nabi Muhammad agar aku bisa membersamainya di medan jihad para perang badar atau uhud.”</span> Maa syaa Allah, tawa sebelumnya berubah menjadi haru.</p>
    <br>
    <p>Satu demi satu para murid menjawab secara bergantian. <span style="font-style: italic;">"Aku ingin mendengar langsung suara indah Rasulullah saat mengimami para sahabat ustadz."</span> Sahut murid yang duduk terdepan dekat saya. Walau memang ada beberapa murid yang tak dapat berkata-kata. Entah karena Rasulullah begitu amazing hingga ia takut memilih diksi atau memang karena ia belum mampu menjawab.</p>
    <br>
    <p>Maa syaa Allah begitu antusiasnya mereka mengungkapkan kerinduannya kepada Baginda Nabi. <strong>Terimakasih murid-muridku!</strong></p>
    <br>
    <p>Tak terasa saat ini kita sudah berada di bulan rabiul awwal dalam tanggalan hijriyah. Masjid-masjid mulai merencanakan agenda kajian mengenang baginda Rasulullah SAW.</p>
    <br>
    <p>Buat kita para orangtua, sebelum kita mengajarkan cinta nabi kepada anak-anak kita maka berkacalah. Jangan sampai pengetahuan tentang nabi lebih dipahami anak daripada kita.</p>
    <br>
    <p>Setiap yang mencintai selalu menyebut dan mengenang sang kekasih. Karena rindu perlu bukti. Karena cinta butuh pengorbanan. Begitulah seharusnya kita sebagai perindu Nabi untuk membuktikan cinta padanya.</p>
    <br>
    <p>Tak perlu memulai dari yang berat. Sudahkah kita bershalawat padanya hari ini? Sunnah nabi mana yang sudah kita jaga setiap hari? Saat Nabi begitu peduli pada sahabatnya, maka sepeduli apa kita pada anak, orangtua, keluarga, atau bahkan tetangga?</p>
    <br>
    <p>Jika saja anak SD begitu paham tentang rindu Nabi, maka sejatinya kita yang sudah mukallaf seharusnya rindu tanpa tepi. Tak perlu 'bermaulid' untuk membangun rindu. Cukup bertanya: <span style="font-style: italic;">"Apakah benar aku sudah layak menjadi ummat Nabi?"</span></p>
    <br>
    <p><strong>Shallallahu 'alaika ya Rasulallah... 😇</strong></p>
    <br>
    <p style="text-align: right;">Abu Qudsy, 10/9/24</p>
    <br>
    <p style="font-style: italic;">(Semua percakapan di atas, selama di kelas mengalir dengan bahasa arab.)</p>
  </div>`;

  return await prisma.post.update({
    where: { slug },
    data: {
      content: newContent,
    },
  });
}
