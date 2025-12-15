"use client"
"use client"
import {
  Clock,
  Users,
  Video,
  CheckCircle,
  Star,
  Calendar,
  BookOpen,
  Trophy,
  Zap,
  Play,
  Gift,
  ExternalLink,
} from "lucide-react"
import { Spotlight } from "./ui/Spotlight"
import { AnimatedGridPattern } from "./ui/animated-grid-patteren"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"


import { cn } from "@/lib/utils"
import { FadeText } from "./ui/fate-text"
import MagicButton from "./ui/magic-button"

const CourseMarketingComponent = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Sessions en direct via Google Meet",
      desc: "Interaction directe avec le formateur expert",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "15 sessions de formation",
      desc: "30 heures d'apprentissage intensif et pratique",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Certificat de réussite",
      desc: "Certifié pour développer votre parcours académique",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Application pratique",
      desc: "Programmation en Java, C, Python, SQL",
    },
  ]

  const skills = [
    "Résoudre les problèmes algorithmiques de manière logique",
    "Comprendre les fondamentaux de la programmation et les variables",
    "Maîtriser le contrôle de flux et les boucles",
    "Utiliser les structures de données essentielles",
    "Analyser l'efficacité des algorithmes",
    "Programmer dans plusieurs langages",
    "Comprendre la récursion et ses applications",
  ]

  const handleGoogleFormsRegistration = () => {
    // Replace with your actual Google Forms URL
    window.open("https://forms.google.com/your-form-url", "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" dir="ltr">
      {/* Hero Section with Advanced Background */}
      <div className="relative pb-20 pt-36">
        <div>
          <Spotlight className="-top-[1200px] left-0 md:left-[16%] md:-top-[15%]" fill="white" />
        </div>

        <AnimatedGridPattern
          numSquares={15}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
            "w-[80%] h-[90vh] absolute top-0 left-1/2 transform -translate-x-1/2",
          )}
        />

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center">
            <FadeText
              className="uppercase tracking-[3px] text-xs text-center text-blue-300 mb-6"
              direction="down"
              text="Formation d'Excellence • Préparation Universitaire • Méthodes Innovantes"
            />

            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 mb-8">
              <Gift className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Première session entièrement gratuite !</span>
            </div>

            <TextGenerateEffect
              words="Maîtrisez les Algorithmes et Structures de Données"
              className="text-center text-[40px] md:text-6xl lg:text-7xl max-w-[900px] font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            />

            <FadeText
              className="text-center md:tracking-wider mb-8 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed"
              text="Préparez-vous à exceller en première année d'informatique avec une formation intensive qui combine le programme Harvard CS50 et le cursus tunisien officiel"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            />

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">Début : 15 Août 2025</span>
              </div>
              <div className="flex items-center text-purple-300 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-medium">30 heures intensives</span>
              </div>
              <div className="flex items-center text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">Groupes restreints</span>
              </div>
            </div>

            <FadeText
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.5 } },
              }}
            >
              <MagicButton
                title="S'inscrire maintenant"
                icon={<ExternalLink className="w-5 h-5" />}
                position="right"
                onClick={handleGoogleFormsRegistration}
                className="text-lg px-8 py-4"
              />
            </FadeText>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Pourquoi choisir notre formation ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une approche pédagogique sur mesure pour les étudiants tunisiens, garantissant l&apos;excellence académique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-transparent to-blue-950/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Compétences que vous développerez
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                À l&apos;issue de cette formation, vous serez parfaitement préparé pour affronter les défis de la première
                année universitaire avec une confiance absolue
              </p>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 mt-1 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors leading-relaxed">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 mb-6">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-medium">Offre Spéciale Limitée</span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-4">
                    <span className="line-through text-gray-500 text-3xl mr-4">500 DT</span>
                    <span className="text-emerald-400">350 DT</span>
                  </div>
                  <p className="text-gray-400 text-lg">Formation complète (15 sessions)</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Play className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-blue-300 font-medium">Première session gratuite</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <Video className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-purple-300 font-medium">Sessions via Google Meet</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-yellow-300 font-medium">Certificat de réussite</span>
                  </div>
                </div>

                <div className="mt-8">
                  <MagicButton
                    title="Réserver ma place"
                    icon={<ExternalLink className="w-5 h-5" />}
                    position="right"
                    onClick={handleGoogleFormsRegistration}
                    className="w-full text-lg py-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-blue-950/30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-12">
              Pourquoi nous faire confiance ?
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  Taux de satisfaction étudiants
                </p>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  15
                </div>
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  Sessions de formation intensive
                </p>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  Langages de programmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez notre formation d&apos;excellence et donnez-vous les moyens de réussir brillamment votre parcours en
            informatique
          </p>
          <MagicButton
            title="Commencer mon inscription"
            icon={<ExternalLink className="w-6 h-6" />}
            position="right"
            onClick={handleGoogleFormsRegistration}
            className="text-xl px-10 py-5"
          />
          <p className="text-sm text-gray-500 mt-6">Places limitées • Inscription sécurisée via Google Forms</p>
        </div>
      </section>
    </div>
  )
}

export default CourseMarketingComponent
