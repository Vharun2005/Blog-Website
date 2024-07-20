import React, { useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import BlogContent from './BlogContent'

const BlogSection = () => {
    const [items,setitems] = useState([
        {
            id:1,
            src:'./assets/blog1.jpg',
            title:"AI Things",
            content:'Data annotation is a necessary part of supervised learning—one of the most popular AI training approaches. In supervised learning, AI learns .',
            fullcontent:"Data annotation is a necessary part of supervised learning—one of the most popular AI training approaches. In supervised learning, AI learns from a prelabeled dataset and uses this learned information to process new data in a desired way. This contrasts with unsupervised learning, where AI is given unlabeled data and is left to identify patterns independently.upervised learning produces models that act in a more consistent and reliable way. It’s the only kind of model that should be used in a real business environment without supervision. Supervised learning is key to building Specialized AI models, which are built to understand and carry out a specific task. Yet the data annotation bottleneck means these models are slower to train and deploy than those made with unsupervised learning."
        },
        {
            id:2,
            src:'./assets/blog2.jpg',
            title:'CSS Tricks',
            content:'CSS is really good at many things, but it’s really, really good at two specific things: selecting elements and styling them. That’s the raison d’être for CSS and why it’s a core web language.',
            fullcontent:"CSS is really good at many things, but it’s really, really good at two specific things: selecting elements and styling them. That’s the raison d’être for CSS and why it’s a core web language. In this guide, we will cover the different ways to select elements — because the styles we write are pretty much useless without the ability to select which elements to apply them to.In addition to selectors, this guide also looks at CSS combinators. If selectors identify what we are selecting, you might think of combinators as how the styles are applied. Combinators are like additional instructions we give CSS to select a very particular element on the page, not totally unlike the way we can use filters in search engines to find the exact result we want."
        },
        {
            id:3,
            src:'./assets/blog3.jpg',
            title:"RECESSION IN IT ",
            content:'The IT recession in India refers to a period of economic downturn specifically affecting the Information Technology sector. It is characterized by a slowdown in demand for IT products and services',
            fullcontent:'The IT industry is one of the most dynamic and fast-paced industries in the world. It is constantly evolving, with new technologies and innovations emerging all the time. However, the IT industry is not immune to economic downturns. In fact, the IT industry is often one of the first industries to be hit by a recession.There are a number of reasons for this. First, the IT industry is a cyclical industry. This means that it is prone to periods of boom and bust. During a boom period, there is a high demand for IT workers and salaries are high. However, during a bust period, demand for IT workers falls and salaries can drop sharply.Second, the IT industry is a global industry. This means that it is vulnerable to economic downturns around the world. If there is a recession in one major economy, it can ripple through the global economy and have a negative impact on the IT industry.'
        },
        {
            id:4,
            src:'./assets/blog4.jpg',
            title:'Chatgpt things',
            fullcontent:"ChatGPT is a form of generative AI -- a tool that lets users enter prompts to receive humanlike images, text or videos that are created by AI.ChatGPT is similar to the automated chat services found on customer service websites, as people can ask it questions or request clarification to ChatGPT's replies. The GPT stands for Generative Pretrained Transformer, which refers to how ChatGPT processes requests and formulates responses. ChatGPT is trained with reinforcement learning through human feedback and reward models that rank the best responses. This feedback helps augment ChatGPT with machine learning to improve future responses.OpenAI -- an artificial intelligence research company -- created ChatGPT and launched the tool in November 2022. It was founded by a group of entrepreneurs and researchers including Elon Musk and Sam Altman in 2015. OpenAI is backed by several investors, with Microsoft being the most notable. OpenAI also created Dall-E, an AI text-to-art generator.",
            content:'ChatGPT is an artificial intelligence (AI) chatbot that uses natural language processing to create humanlike conversational dialogue. The language model can respond to questions and compose various written content, including articles, social media posts, essays, code and emails.'
        },
        {
            id:5,
            src:'./assets/blog5.jpg',
            title:"Does ai replace developers",
            fullcontent:"AI is not in a position to replace programmers now, but as a developing technology, its current limitations may become less limiting over time. However, even then, replacing programmers with AI will face another obstacle: human comfort.Programmers and software engineers develop products that deeply impact society. In order for AI to completely replace these job roles, people in society will need to be comfortable relying on these technologies to create programs that analyze medical records, handle financial systems, fly airplanes, control nuclear power plants, and manage military defense systems.Because some software engineers work on highly sensitive programs, confidence in AI’s programming capabilities will have to be very high before AI is in a position to replace programmers completely—and reaching this level of confidence will likely take time.Another important point to remember when you’re trying to forecast when AI will replace programmers: Human programmers are crucial participants in AI development. Even as the technology becomes more advanced, AI programmers and AI software engineers are working on these tools to guide and supervise those advancements.",
            content:'The looming question for incoming students passionate about programming is often, "Will AI replace programmers?" The short answer is no. The future of programming is not a battle between humans and AI; but rather more of a collaboration'
        },
        {
            id:6,
            src:'./assets/blog6.jpg',
            title:'Scope of Blockchain',
            fullcontent:"The paradigm move to cryptocurrency has swept the world of finance and changed the way the world looks at money. With the onset of Bitcoin, blockchain technology has risen to new popularity and significance. Blockchain is an irreversible, impenetrable digital database that permanently and verifiably records transactions. As its relevance grows, it is imperative that we consider the future of blockchain technology and how the field itself can be a prospective career for individuals who have expertise in blockchain.Before we delve into the scope of blockchain technology, let us have a broad overview of blockchain and its characteristics. Blockchain, which is a digital ledger, allows for duplication and sharing over the entire network of connected computer systems. Every member of the Blockchain has access to the history of every transaction or modification made there. The term Distributed Ledger Technology refers to this database (DLT.) A hash, which is a permanent cryptographic signature, is used to record transactions on the Blockchain.Simply put, a hash is a particular algorithm. This indicates that it is a very secure immutable ledger. It becomes clear if the first block in the chain is changed. Without altering every block in the chain across all distributed versions, it would be incredibly challenging for hackers to breach the system.",
            content:'blockchain technology has risen to new popularity and significance. Blockchain is an irreversible, impenetrable digital database that permanently and verifiably records transactions.'
        }
])
  return (
    <section>
        <Container className='bg-red-600'>
            <div className='text-center'>
                <h3 className='display-3 fw-semibold mt-3 py-5 text-secondary '>Latest Blogs <i class="bi bi-code-slash"></i></h3> 
            </div>
            <Row>
            {
                items.map((item)=>{
                    return ( 
                    <Col className='d-flex justify-content-center mt-3 ' md={6} lg={4} key={item.id}>
                    <BlogContent item={item}/>
                   </Col>
                    );
                })
            }
           
        </Row>
        </Container>
        
    </section>
  )
}

export default BlogSection