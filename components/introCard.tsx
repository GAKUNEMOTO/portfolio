export default function IntroCard() {
  return (
    <div className='shadow-sm p-10 border rounded-md w-76 h-auto'>
        {/* <p>
          <span>2002年、埼玉県飯能市生まれ。アメリカ大学3年生</span>
          <br />
          幼少期から17年間サッカーをプレー。高校時代は、元日本代表大迫勇也選手を
          輩出した鹿児島城西高校でプレーをするもメンバーに選ばれずにに挫折。
          そこから、新たな自分を探しにアメリカのTexas Wesleyan Universityに入学。
          スカーラーシップをもらいながら現在もプレー中。
        </p> */}
        <p className="text-muted-foreground mb-1">
          Name : Gaku Nemoto
        </p>
        <p className="text-muted-foreground mb-1">
          Age : 21
        </p>
        <p className="text-muted-foreground mb-1">
          Born : Japan, Saitama
        </p>
        <p className="text-muted-foreground mb-1">
          Birth : September 25, 2002
        </p>
        <p className="text-muted-foreground mb-1">
          Academic : Texas Wesleyan University
        </p>
    </div>
  )
}
