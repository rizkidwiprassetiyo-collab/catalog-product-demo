import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Truck,
  WalletCards,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappNumber = "6285692943604";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const categories = ["Semua", "Fashion", "Makanan", "Elektronik", "Sparepart"];

const products = [
  {
    name: "Basic Hoodie",
    category: "Fashion",
    price: "Rp189.000",
    stock: "Tersedia",
    description: "Hoodie casual untuk katalog fashion lokal dengan detail ukuran, warna, dan tombol order cepat.",
  },
  {
    name: "Kopi Susu Literan",
    category: "Makanan",
    price: "Rp65.000",
    stock: "Tersedia",
    description: "Produk F&B dengan informasi harga, varian, dan pemesanan langsung ke WhatsApp.",
  },
  {
    name: "Wireless Earbuds",
    category: "Elektronik",
    price: "Rp249.000",
    stock: "Stok Terbatas",
    description: "Contoh katalog elektronik dengan status stok dan detail singkat produk.",
  },
  {
    name: "Filter Oli Motor",
    category: "Sparepart",
    price: "Rp38.000",
    stock: "Tersedia",
    description: "Produk sparepart dengan informasi kompatibilitas, harga, dan tombol tanya cepat.",
  },
  {
    name: "Kemeja Linen",
    category: "Fashion",
    price: "Rp159.000",
    stock: "Pre-order",
    description: "Contoh produk fashion yang cocok untuk katalog toko online sederhana.",
  },
  {
    name: "Snack Hampers",
    category: "Makanan",
    price: "Rp125.000",
    stock: "Tersedia",
    description: "Produk paket/hampers yang bisa ditampilkan dengan detail isi dan pilihan order.",
  },
];

const benefits = [
  {
    title: "Produk mudah dicari",
    description: "Calon pembeli bisa melihat daftar produk lebih rapi dibanding hanya lewat feed media sosial.",
    icon: Search,
  },
  {
    title: "Kategori jelas",
    description: "Produk bisa dikelompokkan berdasarkan jenis, stok, kebutuhan, atau target pembeli.",
    icon: Filter,
  },
  {
    title: "Order cepat",
    description: "Tombol order mengarah langsung ke WhatsApp dengan nama produk yang sudah terisi.",
    icon: MessageCircle,
  },
];

const useCases = [
  "Toko fashion",
  "Produk makanan",
  "Sparepart kendaraan",
  "Showroom unit",
  "Elektronik kecil",
  "Produk digital",
  "Katalog reseller",
  "UMKM produk lokal",
];

const faq = [
  {
    q: "Apakah ini sama dengan marketplace?",
    a: "Bukan. Ini adalah katalog mandiri milik bisnis. Tujuannya agar produk terlihat rapi dan pelanggan bisa diarahkan ke WhatsApp untuk order.",
  },
  {
    q: "Apakah bisa ditambah keranjang?",
    a: "Bisa. Untuk versi lanjutan, katalog ini bisa dikembangkan menjadi cart sederhana, checkout, database produk, dan dashboard admin.",
  },
  {
    q: "Apakah stok bisa diubah sendiri?",
    a: "Bisa jika dibuat versi admin. Demo ini masih statis, tetapi strukturnya bisa dikembangkan agar pemilik bisnis dapat mengubah produk sendiri.",
  },
];

function buildWhatsappLink(productName = "produk") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin tanya tentang ${productName}. Apakah masih tersedia?`)}`;
}

export default function CatalogProductPremiumDemo() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = activeCategory === "Semua" || product.category === activeCategory;
      const matchSearch = `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#04100f] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.13),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px]" />

      <section className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-7 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-[0_0_42px_rgba(52,211,153,0.30)]"
              >
                <ShoppingBag size={23} />
              </motion.div>
              <div>
                <p className="font-semibold tracking-wide">Katalog Lokal</p>
                <p className="text-xs text-slate-400">Demo Katalog Produk Online</p>
              </div>
            </div>
            <a
              href="#produk"
              className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-emerald-200/60 hover:bg-white hover:text-slate-950 md:inline-flex"
            >
              Lihat Produk
            </a>
          </nav>

          <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-7">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 shadow-[0_0_34px_rgba(52,211,153,0.08)] backdrop-blur">
                <Store size={16} />
                Katalog online untuk bisnis produk
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.04]">
                  Tampilkan produk dengan rapi, lalu arahkan pembeli ke WhatsApp.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Demo website katalog untuk toko, showroom, sparepart, fashion, makanan, elektronik, dan UMKM yang ingin produknya mudah dilihat tanpa harus membuat marketplace sendiri.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produk"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(52,211,153,0.25)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Jelajahi Produk
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href={buildWhatsappLink("katalog produk")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Tanya Produk
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-3 pt-4 sm:grid-cols-3">
                {["Filter kategori", "Harga jelas", "Order WhatsApp"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="text-emerald-300" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.75rem] bg-emerald-400/10 blur-3xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/35 backdrop-blur-xl">
                <div className="rounded-[1.75rem] bg-white p-5 text-slate-950">
                  <div className="rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_32%),linear-gradient(135deg,#ecfdf5,#ffffff,#e0f2fe)] p-5">
                    <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-emerald-950/10 backdrop-blur">
                      <p className="text-sm font-semibold text-emerald-700">Preview Katalog</p>
                      <h3 className="mt-3 text-2xl font-semibold">Produk Tersedia</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Filter kategori, pencarian produk, detail harga, status stok, dan tombol order WhatsApp.
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {["Filter kategori", "Status stok", "Harga jelas", "Order WhatsApp"].map((item) => (
                          <div key={item} className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/60">
                            <CheckCircle2 className="mb-3 text-emerald-600" size={19} />
                            <p className="text-sm font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <PackageCheck className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">6 produk demo</p>
                      <p className="mt-1 text-xs text-slate-500">Bisa diganti data client</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <Truck className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">Order cepat</p>
                      <p className="mt-1 text-xs text-slate-500">Langsung ke WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Fokus", "Bisnis Produk", "Dibuat untuk bisnis yang ingin menampilkan produk secara rapi, jelas, dan mudah ditanyakan."],
            ["Tujuan", "Order Lebih Cepat", "Pelanggan bisa melihat produk terlebih dahulu sebelum diarahkan ke chat WhatsApp."],
            ["Brand", "Demo by NoTech", "Contoh katalog ini dibuat sebagai bagian dari portofolio NoTech Digital Studio."],
          ].map(([label, title, description]) => (
            <motion.div whileHover={{ y: -6 }} key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{label}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Manfaat</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Katalog membuat produk terlihat lebih serius dan mudah dipahami</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div whileHover={{ y: -8 }} key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section id="produk" className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Produk</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Contoh katalog produk interaktif</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-[1fr_0.8fr]">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Search size={18} className="text-slate-500" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Cari produk..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 px-2 py-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${activeCategory === category ? "bg-emerald-500 text-white" : "bg-white text-slate-600 hover:bg-emerald-50"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.article variants={fadeUp} whileHover={{ y: -8 }} key={product.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-2xl hover:shadow-emerald-950/10">
                <div className="mb-5 flex h-48 items-end rounded-[1.5rem] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_32%),linear-gradient(135deg,#ecfdf5,#ffffff,#dbeafe)] p-5">
                  <div className="rounded-2xl bg-white/85 p-4 shadow-xl backdrop-blur">
                    <ShoppingBag className="mb-3 text-emerald-600" size={26} />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{product.category}</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
                  <div>
                    <p className="font-semibold">{product.price}</p>
                    <p className="mt-1 text-xs text-emerald-700">{product.stock}</p>
                  </div>
                  <button onClick={() => setSelectedProduct(product)} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">
                    Detail
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Target Client</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Cocok untuk banyak bisnis berbasis produk</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">Katalog bisa menjadi halaman utama sebelum bisnis masuk ke sistem toko online yang lebih kompleks.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <motion.div whileHover={{ x: 6 }} key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-slate-300 backdrop-blur">
              <CheckCircle2 size={17} className="text-emerald-300" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pertanyaan umum calon client</h2>
          </motion.div>
          <div className="space-y-4">
            {faq.map((item) => (
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} key={item.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2.25rem] border border-emerald-200/30 bg-emerald-400 p-8 text-slate-950 shadow-[0_0_80px_rgba(52,211,153,0.22)] md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-emerald-100">
                <PackageCheck size={16} />
                Katalog produk siap order
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">Ingin produk terlihat lebih rapi sebelum pelanggan bertanya?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-800 md:text-base">
                Katalog seperti ini cocok untuk bisnis yang ingin punya halaman produk sendiri dan tetap mengarahkan transaksi ke WhatsApp.
              </p>
            </div>
            <a href={buildWhatsappLink("katalog produk online")} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Konsultasi Katalog
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 Katalog Lokal. Demo Katalog Produk Online.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles size={16} />
            Demo by NoTech Digital Studio
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute right-5 top-5 rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-500 transition hover:bg-slate-950 hover:text-white">
                <X size={18} />
              </button>
              <div className="pr-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{selectedProduct.category}</p>
                <h3 className="mt-3 text-3xl font-semibold">{selectedProduct.name}</h3>
                <p className="mt-3 text-2xl font-semibold text-emerald-700">{selectedProduct.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{selectedProduct.description}</p>
              </div>
              <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <p className="mt-1 font-semibold">{selectedProduct.stock}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Kategori</p>
                    <p className="mt-1 font-semibold">{selectedProduct.category}</p>
                  </div>
                </div>
              </div>
              <a href={buildWhatsappLink(selectedProduct.name)} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Tanya via WhatsApp
                <MessageCircle size={17} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
