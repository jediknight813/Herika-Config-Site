import CopyConfig from './CopyConfig'
import { useState } from 'react';


const HerikaConfigForm = () => {


  const [settingsState, setSettingsState] = useState("")
  const [state, setState] = useState({
    OPENAI_API_KEY: '',
    AZURE_API_KEY: '',
    ELEVENLABS_API_KEY: '',
    DEBUG_MODE: false,
    PLAYER_NAME: 'Prisoner',
    HERIKA_PERS: 'You are Herika, a Breton female who likes jokes and sarcastic comments.',
    PROMPT_HEAD: `Let's roleplay in the Universe of Skyrim. You don't describe things or actions, just chat as your character`,
    AZURETTS_CONF: {
      fixedMood: '',
      region: 'westeurope',
      voice: 'en-US-NancyNeural',
      volume: '25',
      rate: '1.2',
      countour: '(11%, +15%) (60%, -23%) (80%, -34%)',
      validMoods: ['whispering', 'default'],
    },
    MIMIC3: 'http://127.0.0.1:59125',
    MIMIC3_CONF: {
      voice: 'en_US/ljspeech_low',
      rate: '1.25',
      volume: '80',
    },
    ELEVEN_LABS: {
      voice_id: 'EXAVITQu4vr4xnSDxMaL',
      optimize_streaming_latency: '0',
      model_id: 'eleven_monolingual_v1',
      stability: '0.75',
      similarity_boost: '0.75',
    },
    STTFUNCTION: 'azure',
    TTSFUNCTION: 'azure',
    TTSLANGUAGE_AZURE: 'en-US',
    TTSLANGUAGE_WHISPER: 'en',
    OPENAI_MAX_TOKENS: '48',
  });


  return (
    <div className=' flex flex-col gap-2'>
        {/* select config tab */}
        <div className="join join-vertical lg:join-horizontal self-center mt-0 pt-0">
          <button className="btn join-item btn-secondary" onClick={() => setSettingsState("TTS")}>Text-To-Speech</button>
          <button className="btn join-item btn-accent" onClick={() => setSettingsState("STT")}>Speech-To-Text</button>
          <button className="btn join-item btn-success text-white hover:opacity-90" onClick={() => setSettingsState("TG")}>Text-Generation</button>
        </div>

        { settingsState == "TTS" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Text To Speech Config </h1>

            <div className='w-[90%] self-center flex flex-col'> 

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select TTS provider</span>
                </label>
                <select onChange={(e) => setState((prevState) => ({ ...prevState, TTSFUNCTION: e.target.value }))} className="select select-bordered">
                  <option value="azure">azure</option>
                  <option value="11labs">ElevenLabs</option>
                  <option value="mimic3">mimic3</option>
                </select>
              </div>


              { state.TTSFUNCTION == "mimic3" && 
                  <>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Select Voice</span>
                      </label>
                      <select onChange={(e) => setState((prevState) => ({ ...prevState, MIMIC3_CONF: { ...prevState.MIMIC3_CONF, voice: e.target.value, }, })) }className="select select-bordered">
                        <option value="en_US/ljspeech_low">en_US/ljspeech_low</option>
                      </select>
                    </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Volume</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.MIMIC3_CONF.volume} onChange={(e) => setState((prevState) => ({ ...prevState, MIMIC3_CONF: { ...prevState.MIMIC3_CONF, volume: e.target.value, }, })) } />
                  </div>


                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rate</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.MIMIC3_CONF.rate} onChange={(e) => setState((prevState) => ({ ...prevState, MIMIC3_CONF: { ...prevState.MIMIC3_CONF, rate: e.target.value, }, })) } />
                  </div>
                    
                  </>
              }


              { state.TTSFUNCTION == "11labs" && 

                  <>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Select Voice</span>
                      </label>
                      <select onChange={(e) => setState((prevState) => ({ ...prevState, ELEVEN_LABS: { ...prevState.ELEVEN_LABS, voice_id: e.target.value, }, })) }className="select select-bordered">
                        <option value="21m00Tcm4TlvDq8ikWAM">Rachel</option>
                        <option value="EXAVITQu4vr4xnSDxMaL">Bella</option>
                        <option value="MF3mGyEYCl7XYWbV9V6O">Elli</option>
                      </select>
                    </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Voice Stability</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.ELEVEN_LABS.stability} onChange={(e) => setState((prevState) => ({ ...prevState, ELEVEN_LABS: { ...prevState.ELEVEN_LABS, stability: e.target.value, }, })) } />
                  </div>


                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Voice Similarity Boost</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.ELEVEN_LABS.similarity_boost} onChange={(e) => setState((prevState) => ({ ...prevState, ELEVEN_LABS: { ...prevState.ELEVEN_LABS, similarity_boost: e.target.value, }, })) } />
                  </div>
                    
                  </>

              }
            

              { state.TTSFUNCTION == "azure" &&
                <>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Azure Api Key</span>
                    </label>
                    <input value={state.AZURE_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, AZURE_API_KEY: e.target.value }))} type="text" className="input input-bordered w-full" />
                  </div>


                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Select Azure Region</span>
                    </label>
                    <select onChange={(e) => setState((prevState) => ({ ...prevState, AZURETTS_CONF: { ...prevState.AZURETTS_CONF, region: e.target.value, }, })) } className="select select-bordered">
                      <option value="westus">West US</option>
                      <option value="westus2">West US 2</option>
                      <option value="eastus">East US</option>
                      <option value="eastus2">East US 2</option>
                      <option value="westcentralus">West Central US</option>
                      <option value="southcentralus">South Central US</option>
                      <option value="westeurope">West Europe</option>
                      <option value="northeurope">East Asia</option>
                      <option value="eastasia">East US</option>
                      <option value="southeastasia">Southeast Asia</option>
                      <option value="centralindia">Central India</option>
                    </select>
                  </div>


                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Fixed Herika Mood</span>
                    </label>
                    <select onChange={(e) => setState((prevState) => ({ ...prevState, AZURETTS_CONF: { ...prevState.AZURETTS_CONF, fixedMood: e.target.value, }, })) } className="select select-bordered">
                      <option defaultChecked selected value="">None</option>
                      <option value="whispering">whispering</option>
                      <option value="default">default</option>
                    </select>
                  </div>


                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Volume</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.AZURETTS_CONF.volume} onChange={(e) => setState((prevState) => ({ ...prevState, AZURETTS_CONF: { ...prevState.AZURETTS_CONF, volume: e.target.value, }, })) } />
                  </div>


                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rate</span>
                    </label>
                    <input className="input input-bordered" type={"number"} value={state.AZURETTS_CONF.rate} onChange={(e) => setState((prevState) => ({ ...prevState, AZURETTS_CONF: { ...prevState.AZURETTS_CONF, rate: e.target.value, }, })) } />
                  </div>
                  

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">TTS Language</span>
                    </label>
                    <input value={state.TTSLANGUAGE_AZURE} onChange={(e) => setState((prevState) => ({ ...prevState, TTSLANGUAGE_AZURE: e.target.value }))} type="text" className="input input-bordered w-full" />
                  </div>


                </>
              }

            </div>
          </>
        }

        { settingsState == "STT" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Speech To Text Config </h1>
            <div className='w-[90%] self-center flex flex-col'> 
            
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select STT provider</span>
                </label>
                <select onChange={(e) => setState((prevState) => ({ ...prevState, STTFUNCTION: e.target.value }))} className="select select-bordered">
                  <option value="azure">azure</option>
                  <option value="whisper">whisper</option>
                </select>
              </div>

              { state.STTFUNCTION == "whisper" &&
                <> 
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">OpenAi Api Key</span>
                    </label>
                    <input value={state.OPENAI_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_API_KEY: e.target.value }))} type="text" className="input input-bordered w-full max-w-xs" />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Transcription Language</span>
                    </label>
                    <input value={state.TTSLANGUAGE_WHISPER} onChange={(e) => setState((prevState) => ({ ...prevState, TTSLANGUAGE_WHISPER: e.target.value }))} type="text" className="input input-bordered w-full max-w-xs" />
                  </div>

                </>
              }

              { state.STTFUNCTION == "azure" &&
                <>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Azure Api Key</span>
                    </label>
                    <input value={state.AZURE_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, AZURE_API_KEY: e.target.value }))} type="text" className="input input-bordered w-full" />
                  </div>

                </>
              }

            </div>
          </>
        }

        { settingsState == "TG" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Text Generation Config</h1>

            <div className='w-[90%] self-center flex flex-col'> 

              <div className="form-control">
                <label className="label">
                  <span className="label-text">OpenAi Api Key</span>
                </label>
                <input className="input input-bordered]" value={state.OPENAI_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_API_KEY: e.target.value }))} type="text" />
              </div>

              <div className="form-control h-[200px]">
                <label className="label">
                  <span className="label-text">Herika Personality</span>
                </label>
                <textarea className="h-[200px] textarea min-h-18" value={state.HERIKA_PERS} onChange={(e) => setState((prevState) => ({ ...prevState, HERIKA_PERS: e.target.value}))} type="text" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Max Tokens</span>
                </label>
                <input className="input input-bordered" type={"number"} value={state.OPENAI_MAX_TOKENS} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_MAX_TOKENS: e.target.value }))} />
              </div>

            </div>

          </>
        }   
        <CopyConfig configState={state} />
    </div>
  )
}

export default HerikaConfigForm


