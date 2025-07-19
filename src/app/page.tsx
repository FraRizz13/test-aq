import HeroHome from '@/components/organisms/HeroHome'
import ModelBanner from '@/components/organisms/ModelBanner'
import TextImage from '@/components/organisms/TextImage'

export default function Home() {
  return (
    <div>
      <HeroHome />
      <TextImage
        title='Inzia una nuova era di <span>Air Max</span> dove lo stile è sempre in  <span>continua evoluzione</span>'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        image='/assets/airmax.webp'
      />
      <ModelBanner title='<span>Sneakers</span> go with everything. I can incorporate Nike sneakers <span>into all my looks.</span>' />
    </div>
  )
}
