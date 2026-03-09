import LogoCloud from '@/components/logo-cloud'

export default function Sponsors() {
  const logos = [
  {
    image: './oca.png',
    alt: 'OCA', 
    url: 'https://www.ocanational.org/'
  },
  {
    image: './apia-vote.png',
    alt: 'apia vote', 
    url: 'https://apiavote.org/'
  },
  {
    image: './ncaat-square.png',
    alt: 'apia vote', 
    url: 'https://ncaat.org/'
  }
]
  const partners = [
    {
    image: './bean-flower.png',
    alt: 'The Bean Flower', 
    url: 'https://thebeanflower.com/'
  },
  {
    image: './momos-master.png',
    alt: "Momo's Master", 
    url: 'https://www.momosmaster.com/'
  },
  {
    image: './bonjour.png',
    alt: 'Bonjour Banh Mi & tea', 
    url: 'https://bonjourbanhmi-tea.com/'
  }
  ]

  return (
    <div className='text-background bg-foreground p-10'>
      <LogoCloud logos={logos} partners={partners}/>
    </div>
  );
}