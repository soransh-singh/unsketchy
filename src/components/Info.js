import illustration from './../images/DesignerLife-bro.svg'
function Info() {

    return (
        <section className="info">
          <div className="info__illustration">
            <img src={illustration} alt="A girl doing sketch"/>
            <a href="https://storyset.com/work">Work illustrations by Storyset</a>
          </div>
          <p><strong>UnSketchy</strong> is a reference site for your sketches
          and drawing so that you can practice and can get better.</p>
          <p>This site is inspired by <a href="http://reference.sketchdaily.net/">
          r/SketchDaily References</a></p>
          <p>If you have any feedback feel free to contact.</p>
          <p>made by ❤️ <a href="https://github.com/soransh-singh">soransh singh</a></p>
          <p>
            Want to contribute and add new features
            <a href="https://github.com/soransh-singh/unsketchy">github</a>
          </p>
        </section>
      )
}

export default Info
