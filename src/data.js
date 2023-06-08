export const data = [
    {
        id: 1,
        title: "Anasayfa",
        paths: "/"
    },

    {
        id: 2,
        title: "Hizmetlerimiz",
        paths: "/hizmetlerimiz",
        subtitles: [
            {
            id: 1,
            subtitle: "Teknik Hizmetlerimiz",
            paths:"/hizmetlerimiz/teknik-hizmetlerimiz",
            items: [
                {
                    id: 1,
                    item: "Frontend Teknolojileri",
                    paths:"/hizmetlerimiz/teknik-hizmetlerimiz/frontend-teknolojileri"
                },

                {
                    id: 2,
                    item: "Backend Teknolojileri",
                    paths:"/hizmetlerimiz/teknik-hizmetlerimiz/backend-teknolojileri"
                },

                {
                    id: 3,
                    item: "AWS Hizmetleri",
                    paths:"/hizmetlerimiz/teknik-hizmetlerimiz/aws-hizmetleri"
                }
            ]},

            {
            id: 2,
            subtitle: "Danışmanlık Hizmetlerimiz",
            paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-hizmetleri",
            items: [
                {
                    id: 1,
                    item: "Teknik Destek",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/teknik-destek",
                },

                {
                    id: 2,
                    item: "Bilgilendirme Hizmetleri",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/bilgilendirme-hizmetleri",
                },

                {
                    id: 3,
                    item: "Mentorluk Hizmetleri",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/mentorluk-hizmetleri"
                },

                {
                    id: 4,
                    item: "Danışmanlık Eğitimleri",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri",
                    subitems: [
                        {
                            id: 1,
                            subitem: "Sertifikalı Danışmanlık Hizmeti",
                            paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri/sertifikali-danismanlik-hizmetleri",
                        },

                        {
                            id: 2,
                            subitem: "Kurumsal Danışmanlık Hizmeti",
                            paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri/kurumsal-danismanlik-hizmetleri",
                        }
                    ]},

                {
                    id: 5,
                    item: "Eğitim Öğretim Planlama",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/egitim-ogretim-danismanligi"
                },

                {
                    id: 6,
                    item: "Yazılım Danışmanlığı",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/yazilim-danismanligi"
                },

                {
                    id: 7,
                    item: "Proje Danışmanlığı",
                    paths:"/hizmetlerimiz/danismanlik-hizmetlerimiz/proje-danismanligi"
                },
            ]},

            {
            id: 3,
            subtitle: "Hatalı Altyapı Onarımı",
            paths:"/hizmetlerimiz/hatali-altyapi-onarimi"
            }


        ]
    },

    {
        id: 3,
        title: "Hakkımızda",
        paths: "/hakkimizda",
        subtitles: [
            {
                id: 1,
                subtitle: "Biz Kimiz?",
                paths: "/hakkimizda/biz-kimiz",
            },

            {
                id: 2,
                subtitle: "Kurumsal",
                paths: "/hakkimizda/kurumsal",
            },

            {
                id: 3,
                subtitle: "Referanslarımız",
                paths: "/hakkimizda/referanslarimiz",
                items: [
                    {
                        id: 1,
                        item: "Geçmiş Referanslar",
                        paths: "/hakkimizda/referanslarimiz/gecmis-referanslar",
                        subitems: [
                            {
                                id: 1,
                                subitem: "x referansı",
                                paths: "/hakkimizda/referanslarimiz/gecmis-referanslar/x-referansi"
                            },

                            {
                                id: 2,
                                subitem: "y referansı",
                                paths: "/hakkimizda/referanslarimiz/gecmis-referanslar/y-referansi"
                            },

                            {
                                id: 3,
                                subitem: "z referansı",
                                paths: "/hakkimizda/referanslarimiz/gecmis-referanslar/z-referansi"
                            }
                        ]
                    },

                    {
                        id: 2,
                        item: "Gelecek Referanslar",
                        paths: "/hakkimizda/referanslarimiz/gelecek-referanslar",
                        subitems: [
                            {
                                id: 1,
                                subitem: "a referansı",
                                paths: "/hakkimizda/referanslarimiz/gelecek-referanslar/a-referansi"
                            },

                            {
                                id: 2,
                                subitem: "b referansı",
                                paths: "/hakkimizda/referanslarimiz/gelecek-referanslar/b-referansi"
                            },

                            {
                                id: 3,
                                subitem: "c referansı",
                                paths: "/hakkimizda/referanslarimiz/gelecek-referanslar/c-referansi"
                            }
                        ]
                    },
                ]
            },

            {
                id: 4,
                subtitle: "Vizyon",
                paths: "/hakkimizda/vizyon"
            },

            {
                id: 5,
                subtitle: "Misyon",
                paths: "/hakkimizda/misyon"
            },
            
        ]
    },

    {
        id: 4,
        title: "İletişim",
        paths: "/iletisim"
    },

    {
        id: 5,
        title: "Kayıt Ol",
        paths: "/kayit-ol"
    },

    {
        id: 6,
        title: "Giriş Yap",
        paths: "/giris-yap"
    }
]