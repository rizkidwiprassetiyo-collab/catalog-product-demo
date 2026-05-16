import React, { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Filter, MessageCircle, PackageSearch, Search, ShoppingBag, SlidersHorizontal, Star, Store, Tag, Truck } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Paket Produk Basic",
    category: "Produk Harian",
    price: "Rp125.000",
    status: "Tersedia",
    description: "Produk pilihan untuk kebutuhan harian dengan harga terjangkau dan kualitas stabil.",
    badge: "Best Value",
  },
  {
    name: "Paket Produk Premium",
    category: "Produk Premium",
    price: "Rp275.000",
    status: "Tersedia",
    description: "Pilihan premium untuk pelanggan yang mencari kualitas lebih tinggi dan tampilan lebih eksklusif.",
    badge: "Populer",
  },
  {
    name: "Produk Custom Order",
    category: "Custom",
    price: "Mulai Rp350.000",
    status: "Pre-order",
    description: "Produk yang bisa disesuaikan dengan kebutuhan, warna, ukuran, atau paket permintaan pelanggan.",
    badge: "Custom",
  },
  {
    name: "Paket Bundling Hemat",
    category: "Bundling",
    price: "Rp199.000",
    status: "Tersedia",
    description: "Paket gabungan untuk pelanggan yang ingin membeli beberapa item sekaligus dengan harga lebih hemat.",
    badge: "Hemat",
  },
  {
    name: "Produk Seasonal",
    category: "Produk Harian",
    price: "Rp155.000",
    status: "Stok terbatas",
    description: "Produk musiman dengan stok terbatas. Cocok untuk campaign, event, atau kebutuhan khusus.",
    badge: "Limited",
  },
  {
    name: "Paket Reseller",
    category: "Bundling",
    price: "Mulai Rp500.000",
    status: "Tersedia",
    description: "Paket pembelian jumlah lebih banyak untuk reseller, toko kecil, atau mitra penjualan lokal.",
    badge: "Reseller",
  },
];

const categories = ["Semua", "Produk Harian", "Produk Premium", "Bundling", "Custom"];

const benefits = [
  "Katalog rapi dan mudah dicari",
  "Tombol order langsung ke WhatsApp",
  "Cocok untuk toko, showroom, sparepart, fashion, makanan, dan produk lokal",
  "Bisa dikembangkan menjadi admin panel dan stok produk",
];

export default function CatalogProductDemo() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = activeCategory === "Semua" || product.category === activeCategory;
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  const buildWhatsappLink = (productName) => {
    const text = encodeURIComponent(`Halo, saya ingin bertanya tentang ${productName}. Apakah masih tersedia?`);
    return `https://wa.me/6285692943604?text=${text}`;
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                <ShoppingBag size={22} />
              </div>
              <div>
                <p className="font-semibold">Katalog Lokal</p>
                <p className="text-xs text-slate-400">Demo Katalog Produk Online</p>
              </div>
            </div>
            <a href="#produk" className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-950 md:inline-flex">
              Lihat Produk
            </a>
          </nav>

          <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <Store size={16} />
                Katalog online untuk bisnis produk
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                  Tampilkan produk dengan rapi, lalu arahkan pembeli ke WhatsApp.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Demo website katalog untuk toko, showroom, sparepart, fashion, makanan, elektronik, dan UMKM yang ingin produknya mudah dilihat tanpa harus membuat marketplace sendiri.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#produk" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                  Jelajahi Produk
                  <ArrowRight size={17} />
                </a>
                <a href="https://wa.me/6285692943604?text=Halo%20saya%20ingin%20membuat%20katalog%20online" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Konsultasi Katalog
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
                <div className="mb-5 rounded-[1.25rem] bg-gradient-to-br from-emerald-100 via-white to-sky-100 p-5">
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-medium text-emerald-700">Preview Katalog</p>
                    <h3 className="mt-3 text-2xl font-semibold">Produk Tersedia</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Filter kategori, pencarian produk, detail harga, status stok, dan tombol order WhatsApp.</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {["Filter kategori", "Status stok", "Harga jelas", "Order WhatsApp"].map((item) => (
                        <div key={item} className="rounded-2xl bg-white p-4 text-sm shadow-sm">
                          <CheckCircle2 className="mb-2 text-emerald-600" size={18} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <PackageSearch className="mb-3 text-slate-700" size={20} />
                    <p className="text-sm font-semibold">6 produk demo</p>
                    <p className="mt-1 text-xs text-slate-500">Bisa diganti sesuai bisnis client</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <Truck className="mb-3 text-slate-700" size={20} />
                    <p className="text-sm font-semibold">Siap order</p>
                    <p className="mt-1 text-xs text-slate-500">Langsung diarahkan ke WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Masalah yang diselesaikan</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Produk lebih mudah dicari, dipahami, dan ditanyakan.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mb-4 text-emerald-600" size={20} />
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="produk" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Produk</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Katalog produk yang siap dijual</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Data produk ini hanya contoh. Untuk client asli, nama, foto, harga, kategori, dan detail produk bisa diganti sesuai kebutuhan bisnis.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <SlidersHorizontal size={17} />
              {filteredProducts.length} produk tampil
            </div>
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Search size={19} className="text-slate-500" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Cari produk..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-3 text-sm font-medium transition ${activeCategory === category ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <div className="flex h-52 items-end bg-gradient-to-br from-slate-200 via-white to-emerald-100 p-5">
                  <div className="rounded-2xl bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">{product.badge}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">{product.category}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">{product.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
                    <p className="text-lg font-semibold">{product.price}</p>
                    <a href={buildWhatsappLink(product.name)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Tanya
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] bg-slate-950 p-8 text-white md:p-12 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Untuk Client</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Demo ini bisa diubah menjadi katalog bisnis apa pun.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Cocok untuk bisnis yang ingin menampilkan produk dengan lebih rapi, tanpa harus membuat marketplace penuh. Untuk tahap berikutnya, katalog ini bisa ditambah admin panel, stok, upload gambar, dan integrasi database.
            </p>
          </div>
          <div className="grid gap-3">
            {["Toko produk lokal", "Showroom mobil", "Sparepart", "Fashion", "Makanan", "Elektronik"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
                <Tag size={17} className="text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 Katalog Lokal. Demo katalog online by NoTech.</p>
          <div className="flex items-center gap-2">
            <Filter size={16} />
            Kategori, pencarian, status stok, dan WhatsApp order.
          </div>
        </div>
      </footer>
    </main>
  );
}
