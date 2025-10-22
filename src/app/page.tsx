import Socials from '@/components/Socials';
import Hand from '@/components/Hand';
import Crab from '@/components/Crab';
import imageMe from '@/images/sweetfocia.jpg';
import Image from 'next/image';
import { BlackBox } from '@/components/Decoration';
import flutterIcon from '@/images/flutter.svg';
import jsIcon from '@/images/javascript.svg';
import javaIcon from '@/images/java.svg';
import unityIcon from '@/images/unity.svg';
import kubernetesIcon from '@/images/kubernetes.svg';
import tsIcon from '@/images/typescript.svg';
import pythonIcon from '@/images/python.svg';
import supabaseIcon from '@/images/supabase.svg';
import wasmIcon from '@/images/webassembly.svg';
import firebaseIcon from '@/images/firebase.svg';
import { TechButton } from '@/components/TechButton';
import gcpIcon from '@/images/google-cloud.svg';
import androidIcon from '@/images/android.svg';
import awsIcon from '@/images/aws.svg';
import reactIcon from '@/images/react.svg';
import htmlIcon from '@/images/html.svg';
import cssIcon from '@/images/css.svg';
import threeJsIcon from '@/images/threejs.svg';
import tailwindIcon from '@/images/tailwindcss.svg';
import cloudflareIcon from '@/images/cloudflare.svg';
import luaIcon from '@/images/lua.svg';
import postgresIcon from '@/images/postgresql.svg';
import redisIcon from '@/images/redis.svg';
import natsIcon from '@/images/nats.svg';
import { ProjectCard } from '@/components/ProjectCard';
import grafanaIcon from '@/images/grafana.svg';
import dockerIcon from '@/images/docker.svg';

export default async function About() {
  return (
    <div className="mx-auto mt-6 max-w-4xl">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div>
          <h1 className="mb-4 font-mono text-2xl font-semibold leading-4 sm:text-3xl">
            Hello there <Hand />
          </h1>
          <p className="mb-4">
            My name is Bartosz Wiśniewski and I am software engineer, with a
            passion for learning and building stuff. Programming polyglot with a
            special place in heart for Flutter, React, Rust <Crab /> and
            TypeScript.
          </p>
          <p className="mb-4">
            Co-organizer of Wrocław 🇵🇱 Java User Group. DIY lover. Built my own
            keyboard from scratch. Occasionally I brew unconventional IPAs 🍺
            and learn about yet another computer thing.
          </p>
          <p className="mb-4">
            Like many, my journey with programming started when I was hosting a
            public Minecraft server at the age of 12. Later my curiosity led me
            to learn multiple programming languages and frameworks, which now
            makes me a one many army for any project.
          </p>
          <p className="mb-4">
            Feel free to contact me at{' '}
            <a
              href="mailto:wisniewski.bartosz000@gmail.com"
              className="underline"
            >
              wisniewski.bartosz000@gmail.com
            </a>{' '}
            or DM on LinkedIn or X.
          </p>
        </div>
        <div className="mt-4 flex items-start gap-8 sm:flex-col sm:justify-end sm:gap-2">
          <div className="relative">
            <BlackBox className="absolute -right-4 -top-4 h-8 w-8" />
            <Image
              src={imageMe}
              alt="My face"
              width={160}
              height={160}
              className="relative z-10 h-32 w-32 rounded-sm border border-gray-900 sm:h-40 sm:w-40"
            />
          </div>
          <div>
            <div className="text-xl">Bartosz Wiśniewski</div>
            <div className="text-gray-600">@pr0gramista</div>
            <Socials variant="big" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 font-mono text-2xl font-semibold">
          Technologies
        </div>
        <div className="mb-4">Stack I like to work with.</div>
        <div className="my-1 text-sm text-gray-600">Programming Languages</div>
        <div className="flex flex-wrap gap-2">
          <TechButton
            className="group-accent-orange"
            description={
              <div>
                <p>
                  If I had to choose one programming language for the rest of my
                  life, I would choose Rust. Low-level language that feels like
                  high-level one. You can code micro-controllers, servers,
                  games, programming languages or even web apps with
                  WebAssembly.
                </p>
                <p className="mt-2">
                  It it a complex language and sometimes the complexity hits
                  hard, but once you get used to it, it's a fun puzzle. It's
                  also a rewarding experience, when it finally compiles and runs
                  as expected.
                </p>
              </div>
            }
          >
            🦀 Rust
          </TechButton>
          <TechButton className="group-accent-yellow">
            <Image src={jsIcon} alt="" width={16} height={16} />
            JavaScript
          </TechButton>
          <TechButton
            className="group-accent-blue"
            description={
              <div>
                It took a long time to get TypeScript solidified in the JS
                ecosystem, but now it's a must-have for me. While it can't fix
                all the issues with JavaScript, it can definitely make a
                difference. Sprinkling it with some type algebraic data types
                and inferred types and you have a pretty cool caveman's static
                language.
              </div>
            }
          >
            <Image src={tsIcon} alt="" width={16} height={16} />
            TypeScript
          </TechButton>
          <TechButton
            className="group-accent-red"
            description={
              <div>
                Good old Java. There are many reasons to hate it, but it's still
                a solid choice. For the past few years the development cycle has
                improved a lot, which even introduced some of the Rusty
                features, in a Java way.
              </div>
            }
          >
            <Image src={javaIcon} alt="" width={16} height={16} />
            Java
          </TechButton>
          <TechButton
            className="group-accent-yellow"
            description={
              <div>
                Python is a language that I have almost never used on
                production, but I have written a lot of scripts in. Whether it's
                plotting some numbers, exposing frontend with HTTP server or
                just running some machine learning models - it's a decent tool.
              </div>
            }
          >
            <Image src={pythonIcon} alt="" width={16} height={16} />
            Python
          </TechButton>
          <TechButton
            className="group-accent-violet"
            description={
              <div>
                One of the most interesting technologies I've ever seen. It's a
                niche and there isn't a library for everything, but this is a
                mature set of tools to make realtime apps flawless.
              </div>
            }
          >
            Elixir
          </TechButton>
          <TechButton className="group-accent-blue">
            <Image src={luaIcon} alt="" width={16} height={16} />
            Lua
          </TechButton>
        </div>
        <div className="my-1 text-sm text-gray-600">Web Development</div>
        <div className="flex flex-wrap gap-2">
          <TechButton
            className="group-accent-cyan"
            description={
              <div>
                <p>React is the King of Web Development. That's it.</p>
                <p className="mt-2">
                  You can use it for everything, from ads to Windows 11 Start
                  Menu.
                </p>
              </div>
            }
          >
            <Image src={reactIcon} alt="" width={16} height={16} />
            React
          </TechButton>
          <TechButton className="group-accent-orange">
            <Image src={htmlIcon} alt="" width={16} height={16} />
            HTML
          </TechButton>
          <TechButton className="group-accent-indigo">
            <Image src={cssIcon} alt="" width={16} height={16} />
            CSS
          </TechButton>
          <TechButton className="group-accent-cyan">
            <Image src={tailwindIcon} alt="" width={16} height={16} />
            Tailwind CSS
          </TechButton>
          <TechButton className="group-accent-neutral">
            <Image src={threeJsIcon} alt="" width={16} height={16} />
            Three.js
          </TechButton>
          <TechButton className="group-accent-indigo">
            <Image src={wasmIcon} alt="" width={16} height={16} />
            WebAssembly
          </TechButton>
        </div>
        <div className="my-1 text-sm text-gray-600">
          Application Development
        </div>
        <div className="flex flex-wrap gap-2">
          <TechButton
            className="group-accent-sky"
            description={
              <div>
                <p>
                  I have never had so much fun crafting complex UI using
                  anything else than Flutter. Animations, rendering graphics
                  from scratch, quality tests, awesome developer experience -
                  making beautiful mobile apps have never been so easy.
                </p>
                <p className="mt-2">
                  My only problem with Flutter is Dart. Code generation is a
                  pain.
                </p>
              </div>
            }
          >
            <Image src={flutterIcon} alt="Flutter" width={16} height={16} />{' '}
            Flutter
          </TechButton>
          <TechButton className="group-accent-green">
            <Image src={androidIcon} alt="" width={16} height={16} />
            Android
          </TechButton>
          <TechButton className="group-accent-neutral">
            <Image src={unityIcon} alt="" width={16} height={16} />
            Unity
          </TechButton>
        </div>
        <div className="my-1 text-sm text-gray-600">Databases & Tools</div>
        <div className="flex flex-wrap gap-2">
          <TechButton
            className="group-accent-blue"
            description={
              <div>
                If you can't decide what database to use, use Postgres. At first
                you can use it like a document database and later on migrate to
                more of a relational database schema. You can use it for
                everything, until scale becomes a problem.
              </div>
            }
          >
            <Image src={postgresIcon} alt="" width={16} height={16} />
            PostgreSQL
          </TechButton>
          <TechButton className="group-accent-red">
            <Image src={redisIcon} alt="" width={16} height={16} />
            Redis
          </TechButton>
          <TechButton className="group-accent-cyan">libSQL / SQLite</TechButton>
          <TechButton className="group-accent-green">MongoDB</TechButton>
          <TechButton className="group-accent-cyan">ScyllaDB</TechButton>
          <TechButton className="group-accent-green">
            <Image src={natsIcon} alt="" width={16} height={16} />
            NATS
          </TechButton>
          <TechButton className="group-accent-sky">
            <Image src={dockerIcon} alt="" width={16} height={16} />
            Docker
          </TechButton>
          <TechButton className="group-accent-indigo">
            <Image src={kubernetesIcon} alt="" width={16} height={16} />
            Kubernetes
          </TechButton>
          <TechButton className="group-accent-amber">
            <Image src={grafanaIcon} alt="" width={16} height={16} />
            Grafana
          </TechButton>
        </div>
        <div className="my-1 text-sm text-gray-600">Services</div>
        <div className="flex flex-wrap gap-2">
          <TechButton className="group-accent-orange">
            <Image src={cloudflareIcon} alt="" width={16} height={16} />
            Cloudflare
          </TechButton>
          <TechButton className="group-accent-neutral">
            <Image src={gcpIcon} alt="" width={16} height={16} />
            GCP
          </TechButton>
          <TechButton className="group-accent-amber">
            <Image src={awsIcon} alt="" width={16} height={16} />
            AWS
          </TechButton>
          <TechButton className="group-accent-green">
            <Image src={supabaseIcon} alt="" width={16} height={16} />
            Supabase
          </TechButton>
          <TechButton className="group-accent-amber">
            <Image src={firebaseIcon} alt="" width={16} height={16} />
            Firebase
          </TechButton>
        </div>
        <div className="mb-4 mt-8 font-mono text-2xl font-semibold">
          Projects
        </div>
        <div className="mb-4">
          It wasn't a work-life balance or good habits — it was diving into my
          fun, pointless, and gloriously unfinished pet projects that truly kept
          me from burning out.
        </div>
        <ProjectCard
          className="my-4"
          title="turbofuro"
          link="https://github.com/turbofuro/turbofuro"
          tech="Rust, React, TypeScript, Tailwind CSS, WebAssembly, Supabase, Kubernetes"
        >
          I designed and built a visual programming language (like Scratch, but
          for grown-ups) and computing platform. Users can drag-and-drop blocks
          to create automations or even web apps without leaving the browser.
          Built using Rust, Kubernetes and React web app with WebAssembly
          modules.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="Aluminium CSS"
          link="https://github.com/pr0gramista/aluminiumcss"
          tech="CSS & HTML"
        >
          Minimal CSS boilerplate to make any debug page shine.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="Charset converter"
          link="https://pub.dev/packages/charset_converter"
          tech="Flutter"
        >
          While UTF-8/16 is fortunately a modern standard for text, there are
          still devices, which are using older text encoding standards. My
          library allows conversion to legacy character code pages. Used
          globally from pub.dev.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="Super Form"
          link="https://pub.dev/packages/super_form"
          tech="Flutter"
        >
          A missing basic form widget for Flutter with validation, error
          handling, and more. Great way to build good forms quickly.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="Memes API"
          link="https://github.com/pr0gramista/memes-api"
          tech="Python & React"
        >
          Web-scraping API for memes from popular Polish sites. Also a web app
          for browsing them. Time-killer for boring classes.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="hello_world_keyboard"
          link="https://github.com/pr0gramista/hello_world_keyboard"
          tech="Arduino & Hardware"
        >
          The project and software of my custom build cheapo mechanical keyboard
          with a unusual features like using it as a driving wheel to play ETS2.
        </ProjectCard>
        <ProjectCard
          className="my-4"
          title="Mobile games - Color Minority, Black Forest"
          tech="Unity"
        >
          At the beginning of my programming journey, I created few mobile and
          desktop games for Android and iOS using libGDX, Unity3D and C#.
          Published to Google Play decade ago.
        </ProjectCard>
      </div>
    </div>
  );
}
