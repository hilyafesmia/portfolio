import Link from 'next/link';
import Image from 'next/image'

export default function WorkCard({slug, img, duration, title, scope}) {
    return (
        <Link href={`/work/${slug}`}>
            <div className="card-item">
                <div className="animate-border">
                    <Image 
                        width={1600}
                        height={900}
                        alt={title}
                        src={`/${img}`}
                    />
                </div>
                <hr/>
                <div className="scope-duration">
                    <p>{scope}</p>
                    <p>{duration}</p>
                </div>
                <h2>{title}</h2>
            </div>
          </Link>
    )
}