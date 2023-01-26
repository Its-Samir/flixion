import Contents from '@/components/Contents/Contents'
import Header from '@/components/Header/Header'
import Head from 'next/head'


export const movieData = [
  {
    id: Math.random(),
    title: 'Movie 1',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WXGq0HLAXzFfqia4q6CjzAHaK-%26pid%3DApi&f=1&ipt=77265e2ace49c7f9cd14353bed5a50816536e4cfeb439f40c0ed5312c6546c46&ipo=images',
    desc: 'This is the First movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 2',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GdVZfbLnHsWngwbOD2L_iwHaK-%26pid%3DApi&f=1&ipt=37166cc54eea6f39b8d40ce143fce960312ad644450e58e004d13354b1952e3e&ipo=images',
    desc: 'This is the Second movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 3',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MyFH5hZu2IVTUI-K40_A0gHaK-%26pid%3DApi&f=1&ipt=a277a8bccc996aa3e60c734cb1ebb81587e3a4836fa9c1aaf40da8feec7fe589&ipo=images',
    desc: 'This is the Third movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 4',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aGNTH2G1Nle-R81m8ZGkdQHaK-%26pid%3DApi&f=1&ipt=91579dda9dfa0e403185c13da43f54ede423c6fee0b38116b69f24f1776447fe&ipo=images',
    desc: 'This is the Fourth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 5',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.GOMWd4XhrlDXNXsLDR0tqAHaL1%26pid%3DApi&f=1&ipt=58d051bcf84d3dc069a1ea3525d81242d6aacbbd29321615f4a1357992c26121&ipo=images',
    desc: 'This is the Fifth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 6',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZRIA0tGwxWGADDUnCX28hQHaJP%26pid%3DApi&f=1&ipt=98ac5d4a1e0cd0a45c8382b64e3c48ca4721010bd400a774faf42d42b31f2bf2&ipo=images',
    desc: 'This is the Sixth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 7',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EjSVl8m6btUywe4brVWm6gHaK9%26pid%3DApi&f=1&ipt=62fbeababc991ef1c6133c47852703512bcf48917e0b961e19598ac0e4a7a2bd&ipo=images',
    desc: 'This is the Seventh movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 8',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.BhEM6Xs0bKhsqDUNYQgsXgHaLH%26pid%3DApi&f=1&ipt=c013283198d34da04575154c5281c7091f3ddc1161cca76761c7128e05be2196&ipo=images',
    desc: 'This is the Eighth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 9',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VdMg277dRCVGYJhUNvjgrQHaK-%26pid%3DApi&f=1&ipt=4604d1efa408327dbe037ab171071b01ca2d8920aac204833d19b69cfd618a39&ipo=images',
    desc: 'This is the Nineth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 10',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XTGrpyXY8kK61fAU3Y4rKQHaLP%26pid%3DApi&f=1&ipt=18c00a6d4e1ebce1d36a37eb49a8fb7307676ef8cea3f5c5c02f6e8d2876a8fa&ipo=images',
    desc: 'This is the Tenth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 11',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.FvqoWwNitOL0HP8fcbKePQHaK_%26pid%3DApi&f=1&ipt=5c5e23c39f1fc525970bf66d424987c7444adff0e58aadb12dbbdd6fbc1eeaa4&ipo=images',
    desc: 'This is the Eleventh movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 12',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kzNE9CYMf7N8PGxP3qADIwHaK-%26pid%3DApi&f=1&ipt=1ff090201cb4509a4ed6d03d960a1bca38b59ebec52a1378ddd09c1586037863&ipo=images',
    desc: 'This is the Twelveth movie.',
    directedBy: 'directed by Mr. A.'
  },
  {
    id: Math.random(),
    title: 'Movie 13',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Mr2cQb_mB3iDLHZne8d-fgHaLH%26pid%3DApi&f=1&ipt=1f96e5e197c04eb594a7fb400bff809723bd38b9eca7e9209f4131cff05205f7&ipo=images',
    desc: 'This is the Thirtheenth movie.',
    directedBy: 'directed by Mr. A.'
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Flixion | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contents />
    </>
  )
}
