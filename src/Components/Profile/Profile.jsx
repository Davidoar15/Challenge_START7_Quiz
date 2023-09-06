
function Profile({ profile }) {

    const { username, name, ranking, points } = profile;

    return (
      <div>
        <div>
            <div>
                <h2>Hola, {name}</h2>
                <p>
                  Hagamos que este día sea productivo
                </p>
            </div>

            <div>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/2c7d/1cd4/d24260cb0eae9bb897f592a1429c4443?Expires=1694995200&Signature=gxmkFs-Bt3uL2s6TPVfnJ8cU26pD7~sH52JcV6U3lpk59EyWD5pYEZ0NcW9uo4~X13o~GOPxngX-sch9tkyYhvG6X3e3T9KvryvaCA~8fgdGQuXsAYt8wLst5q3lqXzILyVqd627IRya5-HDX4Sx5-HADG0oU7C~X25JPTCn3pi-Re3HbAUlXmmKmkP5BSaidlmE7dv~iOB7A0OtZJkfP-ZZ8RfLkny5BepDHUQMcyjNmAyNC0E3VO2Az-EW0pIVIy2QAsuN624nCtTRK1v42dl6l57kCbD~Ax-t5itD8kM0GNB6FqcENHTZds3bJhW8rH4VN-BQzE-vX4ljGi64WA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt={username}
                />
            </div>
        </div>

        <div>
          <div>
            <div>
              <img 
                src="https://s3-alpha-sig.figma.com/img/7bb5/a150/65901357ac59e2d377294f4bd937521f?Expires=1694995200&Signature=GB6witawTKMhUzi4u8lDoU16CEOkqyJuwrB0QvSZijojtXRYDqkMtAalINhFs1nhqgYQCwHtZ~bU4jxAeFZyUUaTXS5Rk1DwJE-8SsrbPdpIFb8ngMFTzKPTxkxgz0ETm9tCXqo4YN2BLvxNVNTwGqNou1s7-lzqoVkXtRg-MxdlXmfPve6dPemVDM9k73YsMnLYRwrZu-H7WaIz-YNfpuUgZf3ZDjgzxEQbTe7NLIrerOogeedoyvYLBOwa~T9WLuC22FspfoMuRovI3yHqrl49nrcjpIm~A-jXW1~VTLvt43SJmPFWKe7Yws1wy4YsNsE7EOmNIfchbzDz9swJoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="trophy"
              />
            </div>

            <div>
              <h6>Clasificación</h6>
              <h5>{ranking}</h5>
            </div>
          </div>

          <div>
            <div>
              <img 
                src="https://s3-alpha-sig.figma.com/img/e65f/e1c9/1ab09239d6ec6abfe4e2521587b97d55?Expires=1694995200&Signature=Y4NFfDpVoxRlt~IYFZPlsd4gRtYPoXZDMUatXylAUIX3Kbukl97PNvPotLhjVRJAmPQmDz7ct1pCcZkieEnMad6AClHp4W9RKyI-nk85YOx4yUpM3kjZU~8ZKocyYv1IClwDxuVaptFwoE~zUyGruR17AiM4tcS9YeyepM~Ru~5FQKe-M2JoAVbAhWUV80xf6UPJ6IbXQvFsJ6P7SGHCK~U9Sscvnsa168YSbzTekY2u2Rdg8GNQhWVVOOdtCA1gNm7kIwe7EAX2zcPG~K8zMpuo1stzcNkn-4IaXTYJ8J06N6a4rJS54tAJCaoVUoKSN5bX8oFA4vcCaWYof2OjzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="coin"
              />
            </div>

            <div>
              <h6>Puntos</h6>
              <h5>{points}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default Profile;