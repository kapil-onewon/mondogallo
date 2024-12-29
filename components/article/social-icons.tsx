import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook size={24} />
        <span className="sr-only">Facebook</span>
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter size={24} />
        <span className="sr-only">Twitter</span>
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Instagram size={24} />
        <span className="sr-only">Instagram</span>
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}

