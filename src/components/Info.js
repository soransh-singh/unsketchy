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
        </section>
      )
}

export default Info
