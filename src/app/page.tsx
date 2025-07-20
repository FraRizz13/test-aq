import HeroHome from '@/components/organisms/HeroHome'
import ModelBanner from '@/components/organisms/ModelBanner'
import TextImage from '@/components/organisms/TextImage'

export default function Home() {
  return (
    <div>
      <HeroHome />
      <TextImage
        title='Inzia una nuova era di <span>Air Max</span> dove lo stile è sempre in  <span>continua evoluzione</span>'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        image='/assets/laces.png'
      />
      <ModelBanner
        title='<span>Sneakers</span> go with everything. I can incorporate Nike sneakers <span>into all my looks.</span>'
        author='Robin Fabian zanier'
      />
    </div>
  )
}
