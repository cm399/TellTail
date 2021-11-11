import { useState } from "react";
import { useParams } from "react-router";
import MockData from "./../../Static/index.json";
import { ArticleWrapper, Banner, Content, Heading, Image, Description } from "./styled";

const StaticBanner = "/Images/image3.png";
const StaticImage = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";

const Article = (props) => {

    const { title } = useParams();
    const [article] = useState(MockData[title]);


    return (
        <ArticleWrapper>
            <Banner src={article.img[1] ?? StaticBanner} alt={article[1] ?? StaticBanner} />
            <Content>
                <Heading>
                    {title}
                </Heading>
                <div className="auther">By Ji Khalsa</div>
                <Image src={article.img[0] ?? StaticImage} alt={article[0] ?? StaticImage} />
                <Description>
                    {article.body}
                    There are a lot of myths floating around about safety and efficacy of puppy vaccines, as well as the use of nomographs and nosodes. Like most myths, these are often based in partial truths, but then go off base and mislead us in the end.


                    Vaccination science is progressing in veterinary medicine, and we are learning new things every day. Most vets have gone to 3 year vaccines when possible. Titering is also not a bad idea if you want to avoid unneccessary vaccines.


                    However, I don't have the fear of vaccines that many people seem to have for some reason and am fine with vaccinating every 3 years. Serious adverse reactions happen but are rare and the risks of infections far, far outweigh vaccine risks.


                    Four of the most common anti-puppy vaccine arguments I've seen include:


                    1. Most puppies will be exposed to parvo at the vet clinic.
                    This is alarmist at best. While it's possible, most vets have robust cleaning protocols as well as quarantine protocols for active infections. In addition to being incorrect this myth, it fails to consider the possibility of at-home vet visits and breeder-administered first vaccines, such as Neopar.


                    2. Only 30% (or some other percentage) will be protected with an early vaccine.
                    This may be correct (I haven't looked up whether this is), but that's still a significant amount of saved puppies. I'm pretty happy with the possibility of a 30% risk reduction. What this actually means is that for puppies whose maternal protection wears off at 6 weeks, there is protection conferred by an early vaccine.


                    3. Maternal antibodies protect the puppies.
                    Yes, maternal antibodies can neutralize vaccines if they are present in the puppy. That's why we give a series of vaccines to our puppies—to cover that period of risk. Other than not conferring long-term immunity, there is no harm to the puppy to have maternal antibodies neutralize a vaccine.


                    4. Nomographs eliminate my risk.
                    Some breeders use nomographs to help predict risk windows. Unfortunately, they don't provide the information many breeders think they do and do not guarantee immunity in puppies.


                    So what exactly do nomographs tell us (or not tell us)?
                    The lack of reliability for puppy protection is not my opinion: University of Wisconsin (who performs the nomographs) clearly says not to rely on nomographs for assurance of protection right on the nomograph website


                    "nomograph results should not be used as a definitive indication of protection from disease."[1]

                    And right on the actual nomograph results it has this disclaimer:


                    "due to potential failure of passive transfer, the nomograph is not to be used as an indication of protection from wild-type virus for the litter."

                    Nomographs do NOT tell us the quality of maternal colostrum nor how well the puppies have absorbed it, which is why there is room for error.


                    Also, antibodies alone are not a complete picture of immunity and should not be considered the sole metric of protection. It's a good metric, and it's relatively easy to measure, but more robust immunity comes from a complete immune response which includes T-cell immunity.


                    This all said, nomographs do give good information about optimal vaccination windows, but should not be used as a reason not to vaccinate throughout the window on a science-based schedule.

                    Additionally, effective use of nomographs requires testing of puppies after immunizations, and this needs to be done with the same test by the same lab. In all honesty, most families and/or most vets won't follow through with this.


                    What can I do instead of a nomograph?
                    An alternative to a nomograph is to titer a puppy after vaccination to determine efficacy.


                    This is a much more individually directed strategy and tells you what actually happened immunologically rather that what *could* happen.


                    Titering puppies will cover puppies that may need a later vaccination to ensure immunity. I've also not seen any evidence that a monograph is a better indicator of puppy immunity than a titer.


                    Vaccine reactions
                    Vaccine reactions happen.  There's risk in everything in life. Walking across the street, staying home, eating, breathing. You name it, there's a risk.


                    The point of vaccines is to use them as risk reduction.


                    That doesn't mean there are no risks to vaccines.


                    What it does mean is that the risk of giving a vaccine far outweighs the risk of unprotected exposure to a pathogen.


                    If you are concerned about risks, the vast majority of severe vaccine reactions will happen in 30-45 minutes after a vaccine. So just hang out at the vet for a little while after vaccines. Find a bench under your tree or sit in your car and surf the internet or read or call someone.


                    On a personal note, to try to emphasize my confidence in the benefits of vaccination, I had severe reactions to two childhood vaccines. One of them would have killed me were it not for an attentive mother and a fast-acting physician.


                    But I still get all my other vaccines. I just avoid those two. I get regular flu vaccines, tetanus, and I was super happy to get my covid vaccine. I do wait at the doctor or pharmacy for an hour after because, yes, it's scary with a history of reactions, but I still firmly believe the benefits far outweigh the risks and I hope my own personal choices show that.


                    My personal puppy vaccine practices
                    We give an early Neopar vax at home and wait until 8 weeks for additional core vaccines and recommend a 3-week interval for boosters. We don't give lepto, lyme, corona, or giardia vaccines to young puppies.


                    However, we do recommend families ask their vets if there is a leptosporosis risk for their lifestyle and in their area and support lepto vaccination for older puppies (after the core series) if indicated. While data show the lepto vaccine is safe and reduces risk dogs who may have exposure, it does have a slightly higher reaction rate than most other vaccines. So we give the lepto vaccine at a separate time from any other vaccines so that if there is a reaction, we can clearly see that it is the lepto vaccine and not another. We also will wait an extra 30-45 minutes at the vet after the lepto vaccine as that is the timeframe in which we would expect to see any serious reactions. So far, in 30 years of training, breeding, etc., we have had one—one—dog react to the lepto vaccine (she was fine after some meds).


                    We also give the bivalent canine influenza vaccine to older puppies.


                    We are required by state law to give bordatella at 8 weeks, but I'd give it anyway. First, even though I don't have any kennels on my property, I do have a lot of dogs and that increases risk. Second, too many families use dog parks, day care, training facilities, etc for me to think there's no risk.


                    I also think a puppy's vet is the best resource for an immunization schedule. The vet knows the actual local risks, can take other factors into consideration such as breed, health issues, environmental issues (eg, did the puppy experience some kind of stressor that needs to be factored in)
                </Description>
            </Content>
        </ArticleWrapper>
    )
}

export default Article;